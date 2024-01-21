

const Student_Visa = ({student}) => {
const {countryName}=student;
    return (
        <div>
            <h1>{countryName}</h1>
        </div>
    );
};

export default Student_Visa;