import { ShoppingBag } from "lucide-react";
import { ProductList } from "@/widgets/ProductList/ProductList";

const Home = () => {
    return (
    <div className="py-6 sm:py-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Каталог товаров</h1>
        </div>

        <ProductList />
      </div>
    </div>
  );
}

export default Home;
