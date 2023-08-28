import React from "react";
import Head from "next/head";

const Agenda = () => {
  const timetableData = [
    {
      time: "9:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "Piano- Prof. Joaquim",
      thursday: "Piano- Prof. Alexey",
      friday: "Teatro-Prof. Correia",
    },
    {
      time: "10:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "Piano- Prof. Joaquim",
      thursday: "Piano- Prof. Alexey",
      friday: "Teatro-Prof. Correia",
    },
    {
      time: "11:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "Piano- Prof. Joaquim",
      thursday: "Piano- Prof. Alexey",
      friday: "Teatro-Prof. Correia",
    },
    {
      time: "13:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "Piano- Prof. Alexey",
      thursday: "Piano- Prof. Teresa",
      friday: "",
    },
    {
      time: "14:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "Piano- Prof. Alexey",
      thursday: "Piano- Prof. Teresa",
      friday: "Ed. Musical - Prof. Mercedes",
    },
    {
      time: "15:30 AM",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "Piano- Prof. Teresa",
      friday: "Ed. Musical - Prof. Mercedes",
    },
    {
      time: "16:30 AM",
      monday: "",
      tuesday: "Guitarra - Prof. Felix",
      wednesday: "",
      thursday: "Piano- Prof. Teresa",
      friday: "Teatro-Prof. Correia",
    },
    {
      time: "17:30 AM",
      monday: "Afro House - Prof. Armando",
      tuesday: "Guitarra - Prof. Felix",
      wednesday: "",
      thursday: "Piano- Prof. Teresa",
      friday: "Teatro-Prof. Correia",
    },
    {
      time: "18:30 AM",
      monday: "Fit Factory - Prof. Armando",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },

    // Add more timetable data entries as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Horários Casa das Artes</title>
        <link rel="stylesheet" href="/styles/styles.css" />
      </Head>
      <main>
        <section className="py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Horários</h1>

            <h1 className="text-4xl font-bold mb-2">
              Segunda-feira/Quarta-feira
            </h1>
        <table className="w-full border border-black">
  <thead>
    <tr>
      <th className="bg-blue-100 text-red-700 py-2 px-4 border-b border-black">Horas</th>
      <th className="bg-blue-500 text-white py-2 px-4 text-center border-b border-black">Sala 1</th>
      <th className="bg-green-500 text-white py-2 px-4 text-center border-b border-black">Sala 2</th>
      <th className="bg-yellow-500 text-white py-2 px-4 text-center border-b border-black">Sala 4</th>
      <th className="bg-purple-500 text-white py-2 px-4 text-center border-b border-black">Sala 5</th>
      <th className="bg-red-500 text-white py-2 px-4 text-center border-b border-black">Palco</th>
    </tr>
  </thead>
  <tbody>
    {timetableData.map((row, index) => (
      <tr key={index}>
        <td className="bg-gray-200 py-2 px-4 font-semibold border-b border-black">{row.time}</td>
        <td className="bg-blue-100 py-2 px-4 border-b border-black">{row.monday}</td>
        <td className="bg-green-100 py-2 px-4 border-b border-black">{row.tuesday}</td>
        <td className="bg-yellow-100 py-2 px-4 border-b border-black">{row.wednesday}</td>
        <td className="bg-purple-100 py-2 px-4 border-b border-black">{row.thursday}</td>
        <td className="bg-red-100 py-2 px-4 border-b border-black">{row.friday}</td>
      </tr>
    ))}
  </tbody>
</table>

<h1 className="text-4xl font-bold mb-2">
              Terça-feira/Quinta-feira
            </h1>
<table className="w-full border border-black">
  <thead>
    <tr>
      <th className="bg-blue-100 text-red-700 py-2 px-4 border-b border-black">Horas</th>
      <th className="bg-blue-500 text-white py-2 px-4 text-center border-b border-black">Sala 1</th>
      <th className="bg-green-500 text-white py-2 px-4 text-center border-b border-black">Sala 2</th>
      <th className="bg-yellow-500 text-white py-2 px-4 text-center border-b border-black">Sala 4</th>
      <th className="bg-purple-500 text-white py-2 px-4 text-center border-b border-black">Sala 5</th>
      <th className="bg-red-500 text-white py-2 px-4 text-center border-b border-black">Palco</th>
    </tr>
  </thead>
  <tbody>
    {timetableData.map((row, index) => (
      <tr key={index}>
        <td className="bg-gray-200 py-2 px-4 font-semibold border-b border-black">{row.time}</td>
        <td className="bg-blue-100 py-2 px-4 border-b border-black">{row.monday}</td>
        <td className="bg-green-100 py-2 px-4 border-b border-black">{row.tuesday}</td>
        <td className="bg-yellow-100 py-2 px-4 border-b border-black">{row.wednesday}</td>
        <td className="bg-purple-100 py-2 px-4 border-b border-black">{row.thursday}</td>
        <td className="bg-red-100 py-2 px-4 border-b border-black">{row.friday}</td>
      </tr>
    ))}
  </tbody>
</table>

<h1 className="text-4xl font-bold mb-2">
              Sexta-feiras/Sábados
</h1>

<table className="w-full border border-black">
  <thead>
    <tr>
      <th className="bg-blue-100 text-red-700 py-2 px-4 border-b border-black">Horas</th>
      <th className="bg-blue-500 text-white py-2 px-4 text-center border-b border-black">Sala 1</th>
      <th className="bg-green-500 text-white py-2 px-4 text-center border-b border-black">Sala 2</th>
      <th className="bg-yellow-500 text-white py-2 px-4 text-center border-b border-black">Sala 4</th>
      <th className="bg-purple-500 text-white py-2 px-4 text-center border-b border-black">Sala 5</th>
      <th className="bg-red-500 text-white py-2 px-4 text-center border-b border-black">Palco</th>
    </tr>
  </thead>
  <tbody>
    {timetableData.map((row, index) => (
      <tr key={index}>
        <td className="bg-gray-200 py-2 px-4 font-semibold border-b border-black">{row.time}</td>
        <td className="bg-blue-100 py-2 px-4 border-b border-black">{row.monday}</td>
        <td className="bg-green-100 py-2 px-4 border-b border-black">{row.tuesday}</td>
        <td className="bg-yellow-100 py-2 px-4 border-b border-black">{row.wednesday}</td>
        <td className="bg-purple-100 py-2 px-4 border-b border-black">{row.thursday}</td>
        <td className="bg-red-100 py-2 px-4 border-b border-black">{row.friday}</td>
      </tr>
    ))}
  </tbody>
</table>

<h1 className="text-4xl font-bold mb-2">
              Sexta-feira
</h1>

<table className="w-full border border-black">
  <thead>
    <tr>
      <th className="bg-blue-100 text-red-700 py-2 px-4 border-b border-black">Horas</th>
      <th className="bg-blue-500 text-white py-2 px-4 text-center border-b border-black">Sala 1</th>
      <th className="bg-green-500 text-white py-2 px-4 text-center border-b border-black">Sala 2</th>
      <th className="bg-yellow-500 text-white py-2 px-4 text-center border-b border-black">Sala 4</th>
      <th className="bg-purple-500 text-white py-2 px-4 text-center border-b border-black">Sala 5</th>
      <th className="bg-red-500 text-white py-2 px-4 text-center border-b border-black">Palco</th>
    </tr>
  </thead>
  <tbody>
    {timetableData.map((row, index) => (
      <tr key={index}>
        <td className="bg-gray-200 py-2 px-4 font-semibold border-b border-black">{row.time}</td>
        <td className="bg-blue-100 py-2 px-4 border-b border-black">{row.monday}</td>
        <td className="bg-green-100 py-2 px-4 border-b border-black">{row.tuesday}</td>
        <td className="bg-yellow-100 py-2 px-4 border-b border-black">{row.wednesday}</td>
        <td className="bg-purple-100 py-2 px-4 border-b border-black">{row.thursday}</td>
        <td className="bg-red-100 py-2 px-4 border-b border-black">{row.friday}</td>
      </tr>
    ))}
  </tbody>
</table>

<h1 className="text-4xl font-bold mb-2">
              Sábado
</h1>

<table className="w-full border border-black">
  <thead>
    <tr>
      <th className="bg-blue-100 text-red-700 py-2 px-4 border-b border-black">Horas</th>
      <th className="bg-blue-500 text-white py-2 px-4 text-center border-b border-black">Sala 1</th>
      <th className="bg-green-500 text-white py-2 px-4 text-center border-b border-black">Sala 2</th>
      <th className="bg-yellow-500 text-white py-2 px-4 text-center border-b border-black">Sala 4</th>
      <th className="bg-purple-500 text-white py-2 px-4 text-center border-b border-black">Sala 5</th>
      <th className="bg-red-500 text-white py-2 px-4 text-center border-b border-black">Palco</th>
    </tr>
  </thead>
  <tbody>
    {timetableData.map((row, index) => (
      <tr key={index}>
        <td className="bg-gray-200 py-2 px-4 font-semibold border-b border-black">{row.time}</td>
        <td className="bg-blue-100 py-2 px-4 border-b border-black">{row.monday}</td>
        <td className="bg-green-100 py-2 px-4 border-b border-black">{row.tuesday}</td>
        <td className="bg-yellow-100 py-2 px-4 border-b border-black">{row.wednesday}</td>
        <td className="bg-purple-100 py-2 px-4 border-b border-black">{row.thursday}</td>
        <td className="bg-red-100 py-2 px-4 border-b border-black">{row.friday}</td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Agenda;
