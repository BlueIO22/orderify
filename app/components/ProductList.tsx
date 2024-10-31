import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
import { Product } from "../api/product";

export default function OrderList({
  products,
  canEdit,
}: {
  products: Product[];
  canEdit?: boolean;
}) {
  const keys = Object.keys(products[0]);
  return (
    <table className="px-10">
      {keys.map((header, index: number) => {
        return (
          <th
            className="ml-10 border-2 min-w-[100px] text-2xl font-bold"
            key={index + "h"}
          >
            {header}
          </th>
        );
      })}
      {canEdit && (
        <th className="border-2 min-w-[100px] text-2xl font-bold">Edit</th>
      )}
      {products.map((product: Product) => {
        return (
          <tr className=" border-2 text-xl text-center">
            {Object.keys(product).map((key: string) => {
              if (key === "order_item") {
                return <td>nothing</td>;
              }
              return <td>{product[key]}</td>;
            })}
            {canEdit && (
              <td className="p-2 shadow-none hover:shadow-lg transition-all">
                <Link
                  to="/products/$productId/edit"
                  params={{
                    productId: product.id.toString(),
                  }}
                  className="p-2 font-bold hover:text-primary"
                >
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}
