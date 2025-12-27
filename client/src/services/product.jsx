const API_URL = "http://localhost:5000/api/";
const token = localStorage.getItem("token")

export async function  createProduct(formData) {
  const response = await fetch(`${API_URL}/product/create`, {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({  
        name: formData.name,
        description: formData.description,
        price: formData.price,
        rate: formData.rate,
        sold: formData.sold,
        stock: formData.stock,
        category: formData.category,
        subcategory: formData.subcategory,
        imageUrl: formData.imageUrl,
    }),
  });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Product creation failed");
    }

    return data;
}

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/product/allproducts`, {
    method: "GET",
    headers: {  
        Authorization: `Bearer ${token}`,
    },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
    }
    return data;
}

export async function getProductById(productId) {
  const response = await fetch(`${API_URL}/product/${productId}`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();   
    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch product");
    }
    return data;
}


export async function updateProduct(productId, formData) {
    const response = await fetch(`${API_URL}/product/${productId}`, {
    method: "PUT",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        price: formData.price,
        rate: formData.rate,
        sold: formData.sold,
        stock: formData.stock,
        category: formData.category,
        subcategory: formData.subcategory,
        imageUrl: formData.imageUrl,
    }),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to update product");
    }
    return data;
}
export async function deleteProduct(productId) {
  const response = await fetch(`${API_URL}/product/delete/${productId}`, {
    method: "DELETE",
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
    const data = await response.json(); 
    if (!response.ok) {
        throw new Error(data.message || "Failed to delete product");
    }
    return data;
}
