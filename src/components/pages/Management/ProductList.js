import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts, updateProduct, deleteProduct } from "../../../actionCreators/product";
import { getProductsArray } from "../../../selectors";

import IconPlus from "../../../assets/icons/Plus";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const handleActive = (active) => {
    dispatch(updateProduct(product.id, { active }))
  }

  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => setMenuOpened(!menuOpened)

  return (
    <div className="management__product grid -two">
      <div className="management__product__info">
            <Link
              to={`/management/edit/${product.id}`}
              className="p-card__toolbar-button --info"
            >
              <img alt="The product" src={product.photoUrl} />
            </Link>
        <span>{product.name}</span>
      </div>
      <div className="management__product__controls">
        <div className='btn'>product.type?</div>
        <Switch
          checked={product.active}
          onChange={handleActive}
          handleDiameter={12}
          onColor="#E74C3C"
          onHandleColor="#FFFFFF"
          offColor="#DBDBDB"
          offHandleColor="#ADADAD"
          boxShadow={null}
          activeBoxShadow={null}
          height={14}
          width={27}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <div className={`management__product__controls__dots ${menuOpened && '--hidden'}`} onClick={toggleMenu}>...</div>
        {menuOpened && (
          <div className="management__product__controls__menu">
            <Link
              to={`/management/edit/${product.id}`}
              className="p-card__toolbar-button --info"
            >
              Edit
            </Link>
            <div className="p-card__toolbar-button --danger" onClick={() => dispatch(deleteProduct(product.id))}>Remove</div>
            <div className="management__product__controls__close" onClick={toggleMenu}>x</div>
          </div>
        )}
      </div>
    </div>
  )
}

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => getProductsArray(state.products.byId))

  const PRODUCTS_MAP = products.map((product) => (
    <SingleProduct key={product.id} product={product} />
  ));

  return (
    <>
      <div className="management__toolbar">
        <header className="management__toolbar__header">Sort by:</header>
        <div>
          <Link to="/management/new" className="p-listing__actions-button -icon">
            <IconPlus />New product
          </Link>
        </div>
      </div>

      <div className="management__products">
        {PRODUCTS_MAP}
      </div>
    </>
  )
}

export default ProductList
