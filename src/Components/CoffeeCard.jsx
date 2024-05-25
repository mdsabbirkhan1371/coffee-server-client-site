import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {

    const {_id,name,quantity,supplier,taste,category,details,photUrl}=coffee;

    const handleDelete=(_id)=>{
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {            

            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                     const remainingCoffee =coffees.filter(cof=>cof._id!==_id)
                     setCoffees(remainingCoffee)
                }
                })
            }
            });
        }

    return (
        <div className="card card-side  shadow-xl border bg-lime-200">
            <figure><img className="w-24 mr-5" src={photUrl}alt="Movie"/></figure>
            <div className=" flex items-center justify-between">
            <div>
                <p>Name: {name}</p>
                <p>Available :{quantity}</p>
                <p>Taste :{taste}</p>
                <p>Supplier : {supplier}</p>
            </div>

                 <div className="card-actions justify-end">
                    <div className="join join-vertical ml-5 space-y-2">
                            <button className="btn join-item bg-green-700">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit Details</button>
                            </Link>
                            <button
                            onClick={()=>handleDelete(_id)}
                            className="btn bg-orange-700 join-item"
                            >Delete</button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default CoffeeCard;