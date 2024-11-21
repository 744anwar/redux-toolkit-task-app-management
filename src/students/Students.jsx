import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, fetchData } from "../redux/studentSlice";
import { useEffect, useState } from "react";

const Students = () => {
  const students = useSelector((state) => state.student.students || []);
  const loading = useSelector((state) => state.student.loading);
  const error = useSelector((state) => state.student.error);
  const dispatch = useDispatch();
  const [filteredSemester, setFilteredSemester] = useState("All");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const filteredStudents = students.filter(
    (student) =>
      filteredSemester === "All" || student.status.includes(filteredSemester)
  );

  if (loading) {
    return <p>Data are loading</p>;
  }
  if (error) {
    return <p>some error occur</p>;
  }
  if (!students.length) {
    return <p>No student record available</p>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between m-2">
          <h2 className="text-lg font-medium p-2">Students Records</h2>
          <div className="flex gap-2">
            <h2 className="text-lg font-medium p-2">Filters</h2>
            <select
              name=""
              id=""
              onChange={(e) => setFilteredSemester(e.target.value)}
              value={filteredSemester}
            >
              <option value="All">All</option>
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
              <option value="3rd Semester">3rd Semester</option>
              <option value="4th Semester">4th Semester</option>
              <option value="5th Semester">5th Semester</option>
              <option value="6th Semester">6th Semester</option>
              <option value="7th Semester">7th Semester</option>
              <option value="8th Semester">8th Semester</option>
            </select>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Semester </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.user}</td>
                  <td>{student.status}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
