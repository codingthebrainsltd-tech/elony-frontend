import { useState, useEffect } from "react";
import React from "react";
import { Card, Loader, Formfeild } from "../Components";

const RenderPost = ({ data, title }) => {
  console.log(data, "renDATA");
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-2xl sm:text-3xl text-center col-span-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wide">
      {title}
    </h2>
  );
};

const Home = () => {
  const [loader, setloader] = useState(false);
  const [allposts, setallposts] = useState(null);
  const [searchterm, setsearchterm] = useState(null);
  const [SearchResults, setSearchResults] = useState(null);
  const [TimeOut, setTimeOut] = useState(null);
  console.log(searchterm);
  useEffect(() => {
    const fetchPosts = async () => {
      setloader(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const result = await response.json();
          setallposts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        setloader(false);
      }
    };
    fetchPosts();
  }, []);

  const HandleSearchChange = (e) => {
    setsearchterm(e.target.value);
    clearTimeout(TimeOut);

    setTimeOut(
      setTimeout(() => {
        const results = allposts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchterm.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchterm.toLocaleLowerCase())
        );
        setSearchResults(results);
      }, 500)
    );
  };
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            The Community Showcase
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Browse Through a Collection Of Visually Stunning AI Images Generated
            By GenZAI
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12 sm:mb-16">
          <label className="block text-center text-sm font-medium text-gray-300 mb-4">
            Search Posts
          </label>
          <div className="max-w-2xl mx-auto">
            <Formfeild
              type="text"
              name="text"
              placeholder="Search by name or prompt..."
              handleChange={HandleSearchChange}
              value={searchterm}
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="w-full">
          {loader ? (
            <div className="flex justify-center items-center py-20">
              <Loader />
            </div>
          ) : (
            <>
              {searchterm && (
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg">
                    Showing Results For
                    <span className="text-white font-semibold ml-2">
                      "{searchterm}"
                    </span>
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {searchterm ? (
                  <RenderPost data={SearchResults} title="No Search Results" />
                ) : (
                  <RenderPost data={allposts} title="No Posts Found!" />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
