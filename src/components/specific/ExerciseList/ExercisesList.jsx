import Exercise2 from "../Exercise/Exercise2";

const ExercisesList = (routine) => {
  return (
    <>
      {routine.map((exercise) => (
        <Exercise2
          key={exercise.id}
          name={exercise.name}
          series={exercise.series}
          reps={exercise.reps}
          time={exercise.time}
        />
      ))}
    </>
  );
};

export default ExercisesList;
