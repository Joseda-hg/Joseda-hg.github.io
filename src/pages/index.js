async function Eliminar() {
    await pb.collection("Ideas").delete(`${lastItem}`);
  }

  async function Guardar() {
    const data = {
      blog: easyMDE.value(),
    };
    console.log(data);
    const record2 = await pb
      .collection("Ideas")
      .update(`${lastItem}`, data);
  }
