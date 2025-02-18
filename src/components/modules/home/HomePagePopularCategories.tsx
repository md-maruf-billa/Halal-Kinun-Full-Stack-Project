
import SectionTitle from '@/components/shared/SectionTitle';
import CustomButton from '@/components/shared/CustomButton';
import Image from 'next/image';

const HomePopularCategories = async () => {
      // const res = await fetch("./popularCategory.json")
      // const data = await res.json()
      // console.log(data)
      const categories = [
            {
                  id: 1,
                  name: "Fresh Fruit",
                  image: "https://i.postimg.cc/wjR7Bqr5/image-1-1.png"
            },
            {
                  id: 2,
                  name: "Fresh Vegetables",
                  image: "https://i.postimg.cc/Nf50NGQh/image-1-3.png"
            },
            {
                  id: 3,
                  name: "Meat & Fish",
                  image: "https://i.postimg.cc/MpBpSscd/image-1-5.png"
            },
            {
                  id: 4,
                  name: "Snacks",
                  image: "https://i.postimg.cc/6QL67yfZ/image-1-7.png"
            },
            {
                  id: 5,
                  name: "Beverages",
                  image: "https://i.postimg.cc/j5MsXm9d/image-1-8.png"
            },
            {
                  id: 6,
                  name: "Beauty & Health",
                  image: "https://i.postimg.cc/Tw56V1rQ/image-1-11.png"
            },
            {
                  id: 7,
                  name: "Bread & Bakery",
                  image: "https://i.postimg.cc/yYyzXwZq/image-1-2.png"
            },
            {
                  id: 8,
                  name: "Baking Needs",
                  image: "https://i.postimg.cc/qqXDdHs2/image-1-4.png"
            },
            {
                  id: 9,
                  name: "Cooking",
                  image: "https://i.postimg.cc/bwFCPTtV/image-1-6.png"
            },
            {
                  id: 10,
                  name: "Diabetic Food",
                  image: "https://i.postimg.cc/6QkM2pzd/image-1.png"
            },
            {
                  id: 11,
                  name: "Dish Detergents",
                  image: "https://i.postimg.cc/SscDWbtH/image-1-9.png"
            },
            {
                  id: 12,
                  name: "Oil",
                  image: "https://i.postimg.cc/h4b2vgmd/image-1-10.png"
            }
      ];




      return (
            <div className='mt-16'>
                  <div className='flex justify-between items-center font-[600] mb-8'>
                        <SectionTitle title={"Popular Category"} />
                        <CustomButton />
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                        {
                              categories?.map(category =>

                                    <div
                                          key={category?.id}
                                          className='border flex flex-col justify-center items-center py-2 rounded-md cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                                    >
                                          {/* {!imageLoaded && <div className="skeleton h-36 w-36"></div>}
                                          <img
                                                src={category.image}
                                                alt=""
                                                className={imageLoaded ? '' : 'hidden'}
                                                onLoad={() => setImageLoaded(true)}

                                          /> */}
                                          <Image
                                                src={category.image}
                                                alt='category image'
                                                width={900}
                                                height={900}
                                                className='w-[190px] h-[130px]'
                                          />

                                          <p className='text-xs md:text-sm font-semibold'>{category.name}</p>

                                    </div>
                              )
                        }

                  </div>
            </div>

      );
};

export default HomePopularCategories;