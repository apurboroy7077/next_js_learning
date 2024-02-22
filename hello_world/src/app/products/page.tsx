import Link from "next/link";

const Product = () => {
  return (
    <div>
      <ol>
        <Link href="/products/product1">
          <li>This is Product 1</li>
        </Link>
        <Link href="/products/Lion" replace>
          <li>This is Lion</li>
        </Link>
        {Array.from({ length: 10 }).map((nothing, index) => {
          return (
            <>
              <Link href={`/products/${index}`}>
                <li>{index}</li>
              </Link>
            </>
          );
        })}
      </ol>
    </div>
  );
};

export default Product;
