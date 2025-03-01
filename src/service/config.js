import axios from "axios";

const API_BASE_URL = "https://api.warungkopimbahredjo.com/api";
// const API_BASE_URL = "http://127.0.0.1:8000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // consolee.error("API Error:", error.response);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
     
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  auth: {
    login: "/login",
    register: "/register",
    logout: "/logout",
  },

  products: {
    getAll: (params) => `/products${params ? `?${params}` : ""}`,
    getByCategory: (category) => `/products?category=${category}`,
    getById: (id) => `/products/${id}`,
    create: "/products",
    update: (id) => `/products/${id}`,
    delete: (id) => `/products/${id}`,
  },

  orders: {
    create: "/orders",
    getbyPage: (page) => `/orders?page=${page}`,
    getAll: (params) => `/orders${params ? `?${params}` : ""}`,
    getById: (id) => `/orders/${id}`,
    updateStatus: (id) => `/orders/${id}`,
    delete: (id) => `/orders/${id}`,
    cancel: (id) => `/orders/${id}/cancel`,
  },

  blogs: {
    getAll: (params) => `/blogs${params ? `?${params}` : ""}`,
    getBySlug: (slug) => `/blogs/${slug}`,
    create: "/blogs",
    update: (id) => `/blogs/${id}`,
    delete: (id) => `/blogs/${id}`,
  },

  statistics: {
    getRevenueToday: () => "/statistics/revenue-today",
    getTotalSalesInThisMonth: () => "/statistics/total-revenue",
    getCountCustomers: () => "/statistics/total-customer",
    getTotalOrders: () => "/statistics/total-orders",
    getTopProducts: (period) => `/statistics/top-products?period=${period}`,
    getSalesData: (period) => `/statistics/sales?period=${period}`,
    getDashboardStats: () => "/statistics",
    downloadPdf: (startDate, endDate) =>
      `/statistics/download-pdf?start_date=${startDate}&end_date=${endDate}`,
  },
};

export const apiService = {
  auth: {
    login: (data) => apiClient.post(endpoints.auth.login, data),
    register: (data) => apiClient.post(endpoints.auth.register, data),
    logout: () => apiClient.delete(endpoints.auth.logout),
  },

  products: {
    getAll: (params) => apiClient.get(endpoints.products.getAll(params)),
    getByCategory: (category) =>
      apiClient.get(endpoints.products.getByCategory(category)),
    getById: (id) => apiClient.get(endpoints.products.getById(id)),
    create: (formData) =>
      apiClient.post(endpoints.products.create, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    update: (id, formData) =>
      apiClient.post(endpoints.products.update(id), formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    delete: (id) => apiClient.delete(endpoints.products.delete(id)),
  },

  orders: {
    create: (data) => apiClient.post(endpoints.orders.create, data),
    getAll: (params) => apiClient.get(endpoints.orders.getAll(params)),
    getById: (id) => apiClient.get(endpoints.orders.getById(id)),
    updateStatus: (id, status) =>
      apiClient.put(endpoints.orders.updateStatus(id), status),
    cancel: (id) => apiClient.post(endpoints.orders.cancel(id)),
    delete: (id) => apiClient.delete(endpoints.orders.delete(id)),
  },

  blogs: {
    getAll: (params) => apiClient.get(endpoints.blogs.getAll(params)),
    getBySlug: (slug) => apiClient.get(endpoints.blogs.getBySlug(slug)),
    create: (formData) =>
      apiClient.post(endpoints.blogs.create, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    update: (id, formData) =>
      apiClient.post(endpoints.blogs.update(id), formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    delete: (id) => apiClient.delete(endpoints.blogs.delete(id)),
  },

  statistics: {
    getRevenueToday: () =>
      apiClient.get(endpoints.statistics.getRevenueToday()),
    getTotalSalesInThisMonth: () =>
      apiClient.get(endpoints.statistics.getTotalSalesInThisMonth()),
    getCustomerCount: () =>
      apiClient.get(endpoints.statistics.getCountCustomers()),
    getTotalOrders: () => apiClient.get(endpoints.statistics.getTotalOrders()),
    getTopProducts: (period) =>
      apiClient.get(endpoints.statistics.getTopProducts(period)),
    getSalesData: (period) =>
      apiClient.get(endpoints.statistics.getSalesData(period)),
    getDashboardStats: () =>
      apiClient.get(endpoints.statistics.getDashboardStats()),
    downloadPdf: (startDate, endDate) => {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams();

      if (startDate) params.append("start_date", startDate);
      if (endDate) params.append("end_date", endDate);

      const url = `${API_BASE_URL}/statistics/download-pdf${
        params.toString() ? `?${params.toString()}` : ""
      }`;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "report.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    },
  },
};

export default apiService;
