const posts = [
  {
    poster: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop",
    author: "Farhan Tanvir",
    title: "We Are at Risk",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae blanditiis, beatae itaque molestias sint quos repellat rem ex deleniti omnis iure aliquam corrupti nostrum architecto quisquam quam ratione pariatur."
  },
  {
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=870&auto=format&fit=crop",
    author: "Farhan Tanvir",
    title: "The Future of the Web",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae blanditiis, beatae itaque molestias sint quos repellat rem ex deleniti omnis iure aliquam corrupti nostrum architecto quisquam quam ratione pariatur."
  },
  {
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=870&auto=format&fit=crop",
    author: "Farhan Tanvir",
    title: "Why Design Matters",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae blanditiis, beatae itaque molestias sint quos repellat rem ex deleniti omnis iure aliquam corrupti nostrum architecto quisquam quam ratione pariatur."
  },
  {
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=870&auto=format&fit=crop",
    author: "Farhan Tanvir",
    title: "Why Design Matters",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae blanditiis, beatae itaque molestias sint quos repellat rem ex deleniti omnis iure aliquam corrupti nostrum architecto quisquam quam ratione pariatur."
  },
  {
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=870&auto=format&fit=crop",
    author: "Farhan Tanvir",
    title: "Why Design Matters",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae blanditiis, beatae itaque molestias sint quos repellat rem ex deleniti omnis iure aliquam corrupti nostrum architecto quisquam quam ratione pariatur."
  }
];


// This is where all blog posts will be appended

const blogContainer = document.querySelector(".blogContainer");



// Function: Create Single Post UI

function createPost(postObj) {

  // Destructure post object
  const { content, title, poster, author } = postObj;
  
  // Clone HTML template (blog card structure)
  const blogTemplate = document
    .querySelector(".blogTemplate")
    .content.cloneNode(true);
  
  // Create main wrapper for each blog post
  const wrapper = document.createElement("article");
  wrapper.classList.add("blog");

   
  // Select elements from template
   
  const blogPoster = blogTemplate.querySelector(".blogPoster");
  const blogTitle = blogTemplate.querySelector(".title");
  const blogContent = blogTemplate.querySelector(".content");
  const authorSection = blogTemplate.querySelector(".author");
  const authorLogo = blogTemplate.querySelector(".author-logo");
  const authorName = blogTemplate.querySelector(".author-name");

   
  // Set Data into Elements
   
  
  // Author image
  authorLogo.setAttribute("src", poster);
  
  // Author name
  authorName.innerText = `by ${author}`;
  
  // Append author info
  authorSection.appendChild(authorLogo);
  authorSection.appendChild(authorName);

  // Blog poster image
  blogPoster.setAttribute("src", poster);

  // Blog title
  blogTitle.innerText = title;

  // Blog content
  blogContent.innerText = content;

   
  // Build Blog Card Structure
   
  wrapper.appendChild(blogPoster);
  wrapper.appendChild(authorSection);
  wrapper.appendChild(blogTitle);
  wrapper.appendChild(blogContent);

   
  // Add to DOM
   
  blogContainer.appendChild(wrapper);
}

export {posts, blogContainer, createPost}