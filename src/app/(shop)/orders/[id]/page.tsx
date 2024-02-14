interface Props{
    params:{
        id: string;
    }
}

export default function OrderPage({params} : Props) {
  return (
    <div>
      <h1>Order #: {params.id} </h1>
    </div>
  );
}