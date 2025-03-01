import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Package,
  Coffee,
  Filter,
  RefreshCcw
} from "lucide-react";
import apiService from "../../service/config";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "../../component/atoms/AlertDialog";
import { formatRupiah } from "../../utils/currency";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    productId: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchProducts();
  }, [activeCategory, deleteModal, searchTerm, currentPage]);

  const fetchProducts = async () => {
    try {
      let queryParams = new URLSearchParams();

      if (searchTerm) queryParams.append("search", searchTerm);
      if (activeCategory) queryParams.append("category", activeCategory);
      queryParams.append("paginate", itemsPerPage);

      const response = await apiService.products.getAll(queryParams.toString());
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteModal({ isOpen: true, productId: id });
  };

  const handleCategorySwitch = (category) => {
    setLoading(true);
    setActiveCategory(category);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      await apiService.products.delete(deleteModal.productId);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
      setDeleteModal({ isOpen: false, productId: null });
    }
  };

  return (
    <div>
      <AlertDialog
        open={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, productId: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3 className="text-lg font-medium text-gray-900">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              onClick={() => setDeleteModal({ isOpen: false, productId: null })}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors ml-3"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <Trash2 size={20} />
              )}
              Delete product
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bright text-primary">Products</h1>
          <button
            onClick={() => navigate("/admin/products/add")}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add Product
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleCategorySwitch("Makanan")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === "Makanan"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Package size={18} />
                Food
              </button>
              <button
                onClick={() => handleCategorySwitch("Minuman")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === "Minuman"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Coffee size={18} />
                Drinks
              </button>
              <button
             onClick={()=>handleCategorySwitch()}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <RefreshCcw size={20} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 p-8">
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Products Yet
                  </h3>
                  <p className="text-gray-500 text-center mb-4">
                    Get started by creating your first product
                  </p>
                  <button
                    onClick={() => navigate("/admin/products/add")}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Plus size={20} />
                    Add New Product
                  </button>
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        No
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        Product Name
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        Category
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        Price
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        Stock
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        key={product.id}
                        className="border-b last:border-b-0 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4">{index + 1}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image || "/placeholder.png"}
                              alt={product.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <span className="font-medium text-gray-900">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {product.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-900">
                          {formatRupiah(product.price)}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              product.stock > 10
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {product.stock} units
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() =>
                                navigate(`/admin/products/edit/${product.id}`)
                              }
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(product.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {/* <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={products.length < itemsPerPage} // or blogs.length for Blogs.jsx
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
