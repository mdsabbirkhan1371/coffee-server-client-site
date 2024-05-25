import Swal from 'sweetalert2'

const AddCoffee = () => {

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

        const newCoffee = {name,quantity,supplier,taste,category,details,photUrl}

        console.log(newCoffee)

        // send data to server or database 

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.insertedId){
             Swal.fire({
                title: 'Success!',
                text: 'Added Coffee Successfully',
                icon: 'success',
                confirmButtonText: 'ok'
                })
           }
        })


    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl">Add A Coffee</h3>

            <form onSubmit={handleForm} className="card-body">
                {/* form row  name  */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="Available Quantity" name="quantity" className="input w-full input-bordered" required />
                    </div>

                </div>

                {/* supplier rorw  */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Taste" name="taste" className="input w-full input-bordered" required />
                    </div>

                </div>

                {/* category section row  */}

                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name="details" className="input w-full input-bordered" required />
                    </div>

                </div>

                {/* photo url row  */}
                <div className="form-control full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input w-full input-bordered" required />
                    </div>
                
            <input type="submit" className="btn btn-block mt-3" value="Add Coffee Now" />
        </form>

        </div>
    );
};

export default AddCoffee;