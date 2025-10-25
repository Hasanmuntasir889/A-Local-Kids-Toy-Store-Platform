import React, { useEffect, useState } from "react";
import PropularSkill from "./PopularSkill";

export default function PopularSkills() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const url = "/fake_data.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-20 ">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Most Popular<span className="text-indigo-600"> Skills</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Discover popular skills offered by local mentors. From music and
          coding to fitness and art — learn, teach, and connect with your
          community today!
        </p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto md:px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <PopularSkill key={index} card={card}></PopularSkill>
          ))}
        </div>
      </div>
    </section>
  );
}