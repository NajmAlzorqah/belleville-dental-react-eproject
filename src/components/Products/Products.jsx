import React, { useEffect } from "react";
import "./Products.css";
const Products = () => {
  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        function createItemElement(item) {
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("item", item.type);
          itemDiv.dataset.id = item.id;

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.alt;

          const infoDiv = document.createElement("div");
          infoDiv.classList.add("info");

          const contentDiv = document.createElement("div");
          contentDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
          `;

          const ratingDiv = document.createElement("div");
          ratingDiv.classList.add("rating");
          ratingDiv.innerHTML = getStars(item.rating);

          const ratingValue = document.createElement("p");
          ratingValue.textContent = `${item.rating}`;

          const rateMessageDiv = document.createElement("div");
          rateMessageDiv.classList.add("rate-message");
          rateMessageDiv.textContent = "👈 Give this product a rating ";

          const starsDiv = document.createElement("div");
          starsDiv.classList.add("stars");
          starsDiv.dataset.productId = item.id;
          starsDiv.innerHTML = `
            <span class="star" data-value="1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>
            <span class="star" data-value="2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>
            <span class="star" data-value="3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>
            <span class="star" data-value="4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>
            <span class="star" data-value="5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>
          `;

          const readDiv = document.createElement("div");
          readDiv.innerHTML = `<a href="#">Buy Now</a>                  <svg
                    height="50" // Adjust height as per your design
                    width="50" // Adjust width as per your design
                    viewBox="0 0 227.096 227.096"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      style={{ fill: "#010002" }} // Adjust fill color as needed
                      points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55"
                    />
                  </svg>`;
          readDiv.classList.add("buy-now");

          starsDiv.appendChild(rateMessageDiv);
          ratingDiv.appendChild(ratingValue);
          infoDiv.appendChild(contentDiv);
          infoDiv.appendChild(ratingDiv);
          infoDiv.appendChild(starsDiv);
          itemDiv.appendChild(img);
          itemDiv.appendChild(infoDiv);
          itemDiv.appendChild(readDiv);

          // Add event listener to each star
          starsDiv.querySelectorAll(".star").forEach((star) => {
            star.addEventListener("click", handleRating);
          });

          return itemDiv;
        }

        // Function to generate star icons based on rating
        function getStars(rating) {
          const starCount = 5;
          const filledStars = Math.floor(rating);
          const remainder = rating - filledStars;
          let starsHTML = "";
          for (let i = 0; i < filledStars; i++) {
            starsHTML +=
              '<span class="star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#F6D43E"/></svg></span>';
          }

          if (remainder > 0) {
            starsHTML +=
              '<span class="star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M12 .587l3.668 7.568L24 9.748l-6 5.85 1.416 8.269L12 18.896l-7.416 3.97L6 15.598l-6-5.85 8.332-1.593L12 .587z" fill="#dcdad9"/></svg></span>'; // Add half star if needed
          }

          return starsHTML;
        }

        // Function to update product rating
        function updateProductRating(productId, rating) {
          // Here you can implement logic to update the rating for the product with the given productId
          // For example, if you have an array of products, you can find the product by ID and update its rating
          const product = data.items.find((item) => item.id === productId);
          if (product) {
            product.rating = rating;
          }
        }

        // Get the container element where items will be appended
        const productList = document.querySelector(".product-list");

        // Function to display items based on filter with animations
        function displayItems(items) {
          productList.innerHTML = "";
          items.slice(0, 3).forEach(function (item) {
            const itemElement = createItemElement(item);
            productList.appendChild(itemElement);
          });
          void productList.offsetWidth;
          productList.querySelectorAll(".item").forEach(function (item) {
            item.classList.add("show");
          });
        }

        // Function to display initial items when the page loads
        function displayInitialItems() {
          displayItems(data.items.slice(0, 3));
        }

        // Function to handle filtering of items
        function handleFiltering(event) {
          event.preventDefault();
          const filterValue = this.getAttribute("data-filter");
          const filteredItems = data.items.filter(function (item) {
            return filterValue === "all" || item.type === filterValue;
          });

          const maxItems = window.innerWidth <= 413 ? 3 : 3;
          productList.querySelectorAll(".item").forEach(function (item) {
            item.classList.add("hide");
          });

          setTimeout(function () {
            productList.innerHTML = "";
            filteredItems.slice(0, maxItems).forEach(function (item) {
              const itemElement = createItemElement(item);
              productList.appendChild(itemElement);
            });
            void productList.offsetWidth;
            productList.querySelectorAll(".item").forEach(function (item) {
              item.classList.add("show");
            });
          }, 500);

          // Remove 'active' class from all filter buttons and add it to the clicked button
          filterButtons.forEach(function (button) {
            button.classList.remove("active");
          });
          this.classList.add("active");
        }

        // Function to handle rating of items
        function handleRating(event) {
          event.preventDefault();
          const rating = parseInt(this.getAttribute("data-value"));
          const productId = parseInt(this.closest(".item").dataset.id);
          updateProductRating(productId, rating);
          const messageContainer =
            this.closest(".item").querySelector(".rate-message");
          messageContainer.textContent = `You rated this product ${rating} stars!`;
        }

        // Get all the filter buttons
        const filterButtons = document.querySelectorAll(".filter-button");

        // Display initial items when the page loads
        displayInitialItems();

        // Add click event listeners to the filter buttons
        filterButtons.forEach(function (button) {
          button.addEventListener("click", handleFiltering);
        });

        // Add click event listeners to the rating stars
        const stars = document.querySelectorAll(".star");
        stars.forEach(function (star) {
          star.addEventListener("click", handleRating);
        });
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  return (
    <section id="products">
      <div className="products">
        <h2 className="separator">
          <span>Products</span>
        </h2>
        <div className="category">
          <button className="filter-button" data-filter="all">
            All
          </button>
          <button className="filter-button" data-filter="toothpaste">
            Toothpaste
          </button>
          <button className="filter-button" data-filter="toothbrush">
            Toothbrushes
          </button>
          <button className="filter-button" data-filter="kids">
            Special Products for Kids
          </button>
          <button className="filter-button" data-filter="accessories">
            Electrical Accessories
          </button>
        </div>
        <div className="product-list">
          {/* Product items will be dynamically generated here */}
        </div>
      </div>
    </section>
  );
};

export default Products;
