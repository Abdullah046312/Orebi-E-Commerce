import React, { useContext, useEffect, useState } from 'react';
import Container from './Container';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";



import { Link, useNavigate } from 'react-router-dom';
import ShopFirstInner from './ShopFirstInner';
import { ApiData } from './ContextApi';
import Pagination from './Pagination';

const ShopFirstpart = () => {
    
    let { info, loading } = useContext(ApiData);
    let [show, setShow] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);
    let [perPage, setPerPage] = useState(6);
<<<<<<< HEAD
    let [activeGrid, setActiveGrid] = useState("");
    let [category, setCategory] = useState([]);
    let [low, setLow] = useState("")
    let [high, setHigh] = useState("")
    let [priceShow, setPriceShow] = useState([])
    let [categoryFilter, setCategoryFilter] = useState([]);
    let lastPage = currentPage * perPage;
    let firstPage = lastPage - perPage;
    let allPage = info.slice(firstPage, lastPage);
    let pageNumber = [];
    for (
      let i = 0;
      i <
      Math.ceil(
        categoryFilter.length > 0 ? categoryFilter : info.length / perPage
      );
      i++
    ) {
      pageNumber.push(i);
=======
    let [activeGrid, setActiveGrid] = useState("")
    let [category, setCategory] = useState([])
    let [categoryFilter, setCategoryFilter] = useState([])

    let lastPage = currentPage * perPage
    let fistPage = lastPage - perPage

    let allPage = info.slice(fistPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil
        (categoryFilter.length > 0 ? categoryFilter : info.length / perPage); i++){
        pageNumber.push(i)

>>>>>>> 0f9bc54aa276bf5bac4f6fe45bca265860b8592c
    }
  
    let paginate = (paginate) => {
      setCurrentPage(paginate + 1);
    };
  
    let next = () => {
      if (currentPage < pageNumber.length) {
        setCurrentPage((state) => state + 1);
      }
    };
    let prev = () => {
      if (currentPage > 1) {
        setCurrentPage((state) => state - 1);
      }
    };
  
    let handleMulti = () => {
      setActiveGrid("active");
    };
  
    useEffect(() => {
      setCategory([...new Set(info.map((item) => item.category))]);
    }, [info]);
  
    let handleCategory = (citem) => {
      let filterItem = info.filter((item) => item.category == citem);
      setCategoryFilter(filterItem);
    };
  
    let handlechange = (e) => {
      setPerPage(e.target.value);
    };
  
    let handleAll = () =>{
      setCategoryFilter("")
    }
  
  
      let handlePrice = (value) =>{
        setLow(value.low);
        setHigh(value.high);
        let priceRange = info.filter((item)=> item.price > value.low && item.price < value.high)
        if(priceRange.length > 0){
          setCategoryFilter(priceRange);
        }else{
          setCategoryFilter("")
        }
      }






    return (
        <section>
            <Container>
            <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <h2 className='text-[#262626] font-bold font-DMs text-[22px]'>
                  Shop by Category
                </h2>

                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (
                <ul>
                <li onClick={handleAll}
                      className="capitalize text-[#262626] font-DMs font-semibold cursor-pointer py-1 text-[20px] mt-4 border-b-4 pb-3"
                    >
                     All Product:
                    </li>
                  {category.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                     className='text-[18px] text-[#767676] font-DMs font-normal cursor-pointer py-1 capitalize border-b'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="">
              <h2 className="text-[#262626] font-bold text-[22px] font-DMs cursor-pointer mt-10">Shop by Price</h2>
              <ul className='text-[18px] text-[#767676] font-DMs font-normal cursor-pointer py-1 capitalize mt-3 '>
                <li onClick={()=>handlePrice({low:0, high:5})}>$0 - $05</li>
                <li className='py-2' onClick={()=>handlePrice({low:5, high:10})}>$05 - $10</li>
                <li  className='pb-2' onClick={()=>handlePrice({low:10, high:15})}>$10 - $15</li>
                <li onClick={()=>handlePrice({low:15, high:2000})}>$15 - $ All</li>
              </ul>
            </div>
          </div>
          <div className="w-4/5 pt-8">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-x-4">
                  <div
                    onClick={() => setActiveGrid("")}
                    className="p-3 hover:bg-[gray] text-[#222]"
                  >
                    <IoGrid className='text-[30px]' />
                  </div>
                  <div
                    onClick={handleMulti}
                    className="p-3 hover:bg-[gray] text-[#222]"
                  >
                    <FaList className='text-[30px]' />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-10 pb-10">
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Sort By :
                  </label>
                  <select
                    onChange={handlechange}
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                </div>
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Show:
                  </label>
                  <select
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <ShopFirstInner
                allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
                priceShow={priceShow}
              />
              <div className="py-10 flex justify-center w-full">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>


            </Container>
        </section>


    );
};

export default ShopFirstpart;
