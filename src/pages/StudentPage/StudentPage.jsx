// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import Title from "../../components/common/Messages/Title/Title";
import Subtitle from "../../components/common/Messages/Subtitle/Subtitle";
import Button from "../../components/common/Buttons/Button/Button";
import ErrorMessage from "../../components/common/Messages/ErrorMessage/ErrorMessage";

import { useAuth } from "../../context/authContextBase";

import {
  StyledStudentPageContent,
  StyledRoutineGroupsWrapper,
  StyledAddRoutineGroupButtonWrapper,
} from "./StyledStudentPage";

// 🔥 Importamos el modal de creación de grupos
import GroupCreationModal from "../../components/specific/Group/GroupCreationModal";

function StudentPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { userName: coachName } = useAuth();

  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentError, setStudentError] = useState(null);

  // 👇 Estado para manejar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      if (!studentId) {
        setStudentError("ID del alumno no proporcionado.");
        setLoadingStudent(false);
        return;
      }
      setLoadingStudent(true);
      setStudentError(null);
      setStudent(null);
      try {
        const studentDocRef = doc(db, "users", studentId);
        const studentDocSnap = await getDoc(studentDocRef);
        if (
          studentDocSnap.exists() &&
          studentDocSnap.data().role === "student"
        ) {
          setStudent({ id: studentDocSnap.id, ...studentDocSnap.data() });
        } else {
          setStudentError(
            "No se encontró al alumno o el ID no corresponde a un alumno."
          );
        }
      } catch (err) {
        console.error("Error al cargar la información del alumno:", err);
        setStudentError("Error al cargar la información del alumno.");
      } finally {
        setLoadingStudent(false);
      }
    };
    fetchStudent();
  }, [studentId, navigate]);

  const navbarType = "studentRoutinesPage";
  const navbarStudentName =
    student?.name || student?.email?.split("@")[0] || "Este Alumno";

  if (loadingStudent) return null;

  if (studentError) {
    return (
      <PageContainer>
        <Navbar
          loading={false}
          type={navbarType}
          studentName={navbarStudentName}
          isCoachDashboard={false}
          userName={coachName}
        />
        <ContentSection style={{ textAlign: "center", marginTop: "20px" }}>
          <ErrorMessage isVisible>{studentError}</ErrorMessage>
          <Button
            onClick={() => navigate("/coach")}
            style={{ marginTop: "15px" }}
            primary
          >
            Volver al panel principal
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer style={{ justifyContent: "flex-start" }}>
      <Navbar
        loading={false}
        type={navbarType}
        studentName={navbarStudentName}
        isCoachDashboard={false}
        userName={coachName}
      />
      <StyledStudentPageContent style={{ maxHeight: "100%" }}>
        <div>
          <Title as="h2">{navbarStudentName}</Title>
          <Subtitle style={{ margin: 0 }}>
            Objetivo: <span>{student?.objective || "No definido"}</span>
          </Subtitle>
        </div>

        <StyledRoutineGroupsWrapper
          style={{
            justifyContent: "center",
            overflowY: "auto",
            maxHeight: "100%",
          }}
        >
          {/* Aquí después listaremos los grupos existentes */}
        </StyledRoutineGroupsWrapper>

        <StyledAddRoutineGroupButtonWrapper>
          <Button
            primary
            style={{ width: "fit-content" }}
            onClick={() => setIsModalOpen(true)} // 🔥 Abrir modal
          >
            Crear nuevo grupo de rutinas
          </Button>
        </StyledAddRoutineGroupButtonWrapper>
      </StyledStudentPageContent>

      {/* Modal de creación de grupos */}
      {isModalOpen && (
        <GroupCreationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          studentId={student.id}
        />
      )}
    </PageContainer>
  );
}

export default StudentPage;
