import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const apiUrl = "https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product";

  // 🌐 Cargar productos desde la API
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // 🎯 Agregar producto al sistema (API + actualizar productos)
  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw new Error("Error al agregar producto");

      const nuevoProducto = await respuesta.json();
      Swal.fire({
        title: "🎉",
        text: "Producto agregado correctamente!",
        icon: "success",
      });

      setProductos((prev) => [...prev, nuevoProducto]);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 🛒 Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    const yaEnCarrito = carrito.find((item) => item.id === producto.id);

    if (yaEnCarrito) {
      const actualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(actualizado);
    } else {
      setCarrito((prev) => [...prev, { ...producto, cantidad: 1 }]);
    }

    Swal.fire({
      title: "🛒",
      text: `${producto.nombre} agregado al carrito`,
      icon: "info",
    });
  };

  // 🧹 Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    const actualizado = carrito.filter((item) => item.id !== id);
    setCarrito(actualizado);
    Swal.fire({
      title: "🧹",
      text: "Producto eliminado del carrito",
      icon: "warning",
    });
  };

  // 🔁 Actualizar producto en la API
  const actulizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw Error("Error al actualizar producto");

      const actualizado = await respuesta.json();
      Swal.fire({
        title: "✅",
        text: "Producto actualizado",
        icon: "success",
      });

      setProductos((prev) =>
        prev.map((p) => (p.id === actualizado.id ? actualizado : p))
      );
      setOpenEditor(false);
      setSeleccionado(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 🗑️ Eliminar producto en la API
  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Eliminar este producto?");
    if (confirmar) {
      try {
        const respuesta = await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
        });
        if (!respuesta.ok) throw Error("Error al eliminar");

        setProductos((prev) => prev.filter((p) => p.id !== id));
        eliminarDelCarrito(id); // también lo sacamos del carrito si estaba

        Swal.fire({
          title: "🗑️",
          text: "Producto eliminado",
          icon: "error",
        });
      } catch (error) {
        alert("Error al eliminar producto");
      }
    }
  };

  return (
    <AdminContext.Provider
      value={{
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        agregarAlCarrito,
        eliminarDelCarrito,
        carrito,
        actulizarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
