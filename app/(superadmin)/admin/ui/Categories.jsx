import { handleDelete } from "@/app/action";
const Categories = ({categories}) => {
    return (
        <div>
    <table className="min-w-full">
        <thead>
            <tr>
                <th className="px-6 py-3  border bg-gray-500 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border bg-gray-500 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 border bg-gray-500 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
            </tr>
        </thead>
        <tbody>
            {categories.map((category) => (
                <tr key={category._id}>
                    <td className="px-6 py-4 border whitespace-nowrap">{category.name}</td>
                    <td className="px-6 py-4 border whitespace-nowrap">{category.description}</td>
                    <td className="px-6 py-4 border whitespace-nowrap">
                        <form action={handleDelete}>
                            <input type="hidden" value={JSON.stringify(category._id)} name="_id" />
                            <input type="submit" value="X" className="bg-red-500 text-white px-3 py-2 rounded"/>
                        </form>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
};

export default Categories;