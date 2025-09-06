import Navbar from "./Navbar";

const students = [
  {
    image: "../student/a.jpg",
    name: "Ravi Shastri",
    qua: "Indian University",
  },
  {
    image: "../student/b.jpg",
    name: "Anil Kumble",
    qua: "Delhi University",
  },
  {
    image: "../student/c.jpg",
    name: "Kapil Dev",
    qua: "Mumbai University",
  },
  {
    image: "../student/d.jpg",
    name: "Sourav Ganguly",
    qua: "Kolkata University",
  },
  {
    image: "../student/e.jpg",
    name: "Rahul Dravid",
    qua: "Bangalore University",
  },
  {
    image: "../student/f.jpg",
    name: "VVS Laxman",
    qua: "Hyderabad University",
  },
  {
    image: "../student/g.jpg",
    name: "MS Dhoni",
    qua: "Ranchi University",
  },
  {
    image: "../student/h.jpg",
    name: "Virat Kohli",
    qua: "Punjab University",
  },
  {
    image: "../student/i.jpg",
    name: "Rohit Sharma",
    qua: "Nagpur University",
  },
  {
    image: "../student/j.jpg",
    name: "Shikhar Dhawan",
    qua: "Chandigarh University",
  },
];

const Student = () => {
  return (
    <div>
      <Navbar />
      <div>
        <header
          style={{
            height: 290,
            background: "#2f9ac4",
            background:
              "linear-gradient(90deg, rgba(47, 154, 196, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 30,
              color: "white",
            }}
          >
            Students
          </h1>
        </header>

        <section
          style={{
            width: "80%",
            margin: "0 auto",
            padding: "80px 0",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {students.map((student, index) => {
            return (
              <div
                style={{
                  width: "24%",
                }}
                key={index}
              >
                <img src={student.image} alt="" width="100%" />
                <h2 style={{ marginBottom: 4, padding: 0 }}>{student.name}</h2>
                <p style={{ margin: 0, padding: 0 }}>{student.qua}</p>
              </div>
            );
          })}
          {/* you can destructuer too */}
          {/* {students.map(({name, qua, image}, index) => {
            return (
              <div
                style={{
                  width: "24%",
                }} key={index}
              >
                <img src={image} alt="" width="100%" />
                <h2 style={{ marginBottom: 4, padding: 0 }}>{name}</h2>
                <p style={{ margin: 0, padding: 0 }}>{qua}</p>
              </div>
            );
          })} */}
        </section>
      </div>
    </div>
  );
};

export default Student;
