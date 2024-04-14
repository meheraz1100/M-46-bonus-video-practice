import Card from "../Card/Card";

const Course = ({level1}) => {
    return (
        <div>
            {
                level1.map((l1) => <Card key={l1.title} cardData={l1}></Card>)
            }
        </div>
    );
};

export default Course;