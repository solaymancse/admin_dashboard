import { Input } from "antd"



const AddCustomer = () => {
  return (
    <div>
      <h1>Create Customer Table</h1>
      <div className="flex justify-between gap-4 relative my-4">

        <Input className="py-2 " placeholder="Title" type="email" name="email" />
        <Input className="py-2 " placeholder="Discount" type="email" name="email" />

      </div>

      <div className="mt-6">

        <Input className="py-2 " placeholder="Product" size="large" type="email" name="email" />

      </div>
      <div className="mt-6">

        <Input className="py-2 " placeholder="Size" size="large" type="email" name="email" />

      </div>
     

    </div>
  )
}

export default AddCustomer
