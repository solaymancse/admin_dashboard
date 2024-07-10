import RoleCard from "../../../components/card/RoleCard/RoleCard"

const RoleAndPermission = () => {
  return (
    <div>
      <div>
        <div className="flex justify-end my-6">
          <button type="submit" className="bg-[#6B66F6] text-white px-10 py-2 rounded-md">Create Role</button>
        </div>
      </div>
      <RoleCard />
    </div>
  )
}

export default RoleAndPermission
