import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSwr,{useSWRConfig} from 'swr'


const ProductList = () => {
    const {mutate} = useSWRConfig();

    const fetcher = async () => {
        const response = await axios.get('http://localhost:5000/users');
        return response.data;
    };

    const {data} = useSwr('users', fetcher);
    if(!data) return <h2>loading..</h2>

    const deleteProduct = async(userId) => {
        await axios.delete(`http://localhost:5000/user/${userId}`);
        mutate('users')
    }
  return (
    <div className='flex flex-col mt-5'>
        <div className='w-full'>
            <Link to={'/add'} className='bg-green-500 hover:bg-green-500 border border-slate-200 text-white font-bold py-2  px-4 rounded-lg' >Add New</Link>
            <div className='relative shadow rounded-lg mt-3'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>No</th>
                            <th className='py-3 px-6 '>Name</th>
                            <th className='py-3 px-6 '>Price</th>
                            <th className='py-3 px-1 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => (
                            <tr className='bg-white border-b' key={product.id}>
                            <td className='py-3 px-1 text-center'>{index + 1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{product.name}</td>
                            <td className='py-3 px-6'>{product.price}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${product.id}`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>Edit</Link>
                                <button onClick={()=> deleteProduct(product.id)} className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white mr-1'>Delete</button>
                            </td>
                        </tr>
                        ))}               
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProductList