function StudentProfile() {
    const student = {
        fullName: "Tran Cong Thuan",
        age: 18,
        country: "Vietnam"
    }

    return (
        <>
            <p>Họ và tên: {student.fullName}</p>
            <p>Age: {student.age}</p>
            <p>Country: {student.country}</p>
        </>
    )
}

export default StudentProfile