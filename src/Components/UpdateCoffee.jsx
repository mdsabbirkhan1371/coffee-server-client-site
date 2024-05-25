import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,name,quantity,supplier,taste,category,details,photUrl}=coffee;

    const handleForm =(e)=>{
        e.preventDefault()
        const form = e.target;

        const name =form.name.value;
        const quantity=form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photUrl =form.photo.value;

        const updateCoffee = {name,quantity,supplier,taste,category,details,photUrl}

        console.log(updateCoffee)

        // send data to server or database 

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.modifiedCount){
             Swal.fire({
                title: 'Success!',
                text: 'Updated Coffee Successfully',
                icon: 'success',
                confirmButtonText: 'ok'
                })
           }
        })


    }

    return (
       <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl">Update Coffee Information:  {name}</h3>

            <form onSubmit={handleForm} className="card-body">
                {/* form row  name  */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" defaultValue={name} name="name" placeholder="Coffee Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} placeholder="Available Quantity" name="quantity" className="input w-full input-bordered" required />
                    </div>

                </div>

                {/* supplier rorw  */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" defaultValue={supplier} name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" defaultValue={taste} placeholder="Taste" name="taste" className="input  w-full input-bordered" required />
                    </div>

                </div>

                {/* category section row  */}

                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} placeholder="Details" name="details" className="input w-full input-bordered" required />
                    </div>

                </div>

                {/* photo url row  */}
                <div className="form-control full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={photUrl} placeholder="Photo URL" name="photo" className="input w-full input-bordered" required />
                    </div>
                
            <input type="submit" className="btn btn-block mt-3" value="Update Coffee Now" />
        </form>

        </div>
    );
};

export default UpdateCoffee;