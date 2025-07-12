import { Squares } from "@/components/ui/squares-background";
export function SquaresSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-black text-center">
          Visual Canvas
        </h2>

        <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#ffffff] shadow-md">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#222"
          />
        </div>
      </div>
    </section>
  );
}
