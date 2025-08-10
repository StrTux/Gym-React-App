export default function MeetOurTrainers() {
  const trainers = [
    {
      src: "https://i.pinimg.com/736x/44/34/77/443477a38f59ca3d68ab83aad0129b5d.jpg",
      width: "w-[280px]",
      height: "h-[350px]"
    },
    {
      src: "https://res.cloudinary.com/drwpjxlfs/image/upload/v1754841187/does-lifting-weights-increase-testosterone_sytd70.webp",
      width: "w-160px",
      height: "h-[350px]"
    },
    {
      src: "https://i.pinimg.com/736x/34/b8/a1/34b8a1a53869c872af8c83535908ec3e.jpg",
      width: "w-[300px]",
      height: "h-[400px]"
    },
    {
      src: "https://i.pinimg.com/1200x/b2/40/b2/b240b21501bc5d5ee7ec674b4975d34f.jpg",
      width: "w-[300px]",
      height: "h-[400px]"
    },
    {
      src: "https://res.cloudinary.com/drwpjxlfs/image/upload/v1754841877/Chris_Bumstead_on_Instagram___Watch_The_Throne___thtkxj.jpg",
      width: "w-[300px]",
      height: "h-[400px]"
    }
  ];

  return (
    <section id='Meet' className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-black mb-5">Meet Our Trainers</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ${trainer.width} ${trainer.height}`}
          >
            <img
              src={trainer.src}
              alt={`Trainer ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
