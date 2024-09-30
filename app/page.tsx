import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* grid background */}
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
export default Home;