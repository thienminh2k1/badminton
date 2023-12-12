import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { addDoc, collection, getDocs } from 'firebase/firestore'

export function Tables() {
  const [productID, setProductID] = useState('')
  const [productName, setProductName] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [image, setImage] = useState('')
  const [supplierID, setSupplierID] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [val, setVal] = useState([])

  const value = collection(auth, 'demo')

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value)
      setVal(dbVal.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getData()
  })

  const handleSubmit = async() => {
    await addDoc(value, {name1: productID, name2: productName, name3: productQuantity, name4: productPrice, name5: brand, name6: image, name7: supplierID, name8: supplierName})
  }

  return (
    <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
                <input onChange={(e) => setProductID(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Product ID" required/>
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                <input onChange={(e) => setProductName(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required/>
            </div>
            <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Quantity</label>
                <input  onChange={(e) => setProductQuantity(e.target.value)} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Quantity" required/>
            </div>
            <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                <input  onChange={(e) => setProductPrice(e.target.value)} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" required/>
            </div>  
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                <input  onChange={(e) => setBrand(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Product ID" required/>
            </div>
            <div className="mb-3">
                <label
                  htmlFor="formFile"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Image</p>
                </label>
                <input 
                  onChange={(e) => setImage(e.target.value)} type="file"
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  id="formFile" />
            </div>
            <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Supplier ID </label>
                <input onChange={(e) => setSupplierID(e.target.value)} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Supplier ID" required/>
            </div>  
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier Name</label>
                <input  onChange={(e) => setSupplierName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Product ID" required/>
            </div>
        </div>
        {/* {
          val.map(items => (
            <div>
              <h1>{items.name1}</h1>
              <h1>{items.name2}</h1>
              <h1>{items.name3}</h1>
              <h1>{items.name4}</h1>
              <h1>{items.name5}</h1>
              <h1>{items.name6}</h1>
              <h1>{items.name7}</h1>
              <h1>{items.name8}</h1>
            </div>
          ))
        } */}
        <button onClick={handleSubmit} type="submit" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  );
}

export default Tables;
