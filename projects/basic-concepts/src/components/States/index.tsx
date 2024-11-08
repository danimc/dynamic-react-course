import Circle from "../Circle";

interface StatesProps {
  bgState: string;
  updateCounter: () => void;
}

function States({ bgState, updateCounter }: StatesProps){
    return (
      <section
        className={`flex justify-center items-center gap-4  w-full h-screen text-center ${bgState}`}
      >
        <Circle updateCounter={updateCounter}>
          <p>Presiona aquí para aumentar el contador</p>
        </Circle>
      </section>
    )
}

export default States