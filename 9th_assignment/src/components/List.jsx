import Card from "./Card";

function List() {
    const person = [ 
    {name:"John Doe", job:"Engineer", hobby: "Listen to music"},
    {name:"Doraemon", job:"Cashier", hobby: "Cosplay"},
    {name:"Johnny", job:"Singer", hobby: "Walking"},
    {name:"John Smith", job:"Programmer", hobby: "Baking"},
];
    return (
       <>
       {person.map((e) => {
        return <Card name={e.name} job={e.job} hobby={e.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;