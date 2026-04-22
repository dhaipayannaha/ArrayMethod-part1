import React from 'react';
import { Link } from 'react-router';

const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())

        console.log(newCoffee);

        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }



    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h3 className='text-6xl text-white'>Add Coffee</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit distinctio repellat, possimus veniam quisquam enim temporibus voluptatibus dolorem ipsum quibusdam magni, beatae blanditiis molestiae ipsam. Ratione repudiandae natus id?</p>
            </div>

            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Details Name" />
                    </fieldset>


                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Add Coffee" />
            </form>

            <div className=' flex justify-center p-4 bg-amber-800 mt-10'>
                            <Link  to='/'>Go to add</Link>
                        </div>
        </div>
    );
};

export default AddCoffee;