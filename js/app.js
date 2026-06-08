const coursesSection = document.querySelector(".courses");
const filterButtons = document.querySelectorAll(".courses__filter");
const searchInput = document.querySelector(".courses__search-input");
const courseItems = document.querySelectorAll(".courses__item");
const emptyMessage = document.querySelector(".courses__empty");
const loadMoreButton = document.querySelector(".courses__load-more");
const loadMoreText = document.querySelector(".courses__load-more-text");

let activeCategory = "all";

const normalizeText = (text) => text.trim().toLowerCase();

const updateVisibleCourses = () => {
  const searchValue = normalizeText(searchInput.value);
  let visibleCoursesCount = 0;

  courseItems.forEach((courseItem) => {
    const courseCategory = courseItem.dataset.category;
    const courseTitle = normalizeText(courseItem.dataset.title || "");
    const matchesCategory =
      activeCategory === "all" || courseCategory === activeCategory;
    const matchesSearch = courseTitle.includes(searchValue);
    const isVisible = matchesCategory && matchesSearch;

    courseItem.hidden = !isVisible;

    if (isVisible) {
      visibleCoursesCount += 1;
    }
  });

  emptyMessage.hidden = visibleCoursesCount > 0;
};

const setActiveFilter = (selectedButton) => {
  activeCategory = selectedButton.dataset.category;

  filterButtons.forEach((filterButton) => {
    const isActive = filterButton === selectedButton;

    filterButton.classList.toggle("courses__filter--active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });

  updateVisibleCourses();
};

if (
  coursesSection &&
  searchInput &&
  emptyMessage &&
  loadMoreButton &&
  loadMoreText &&
  courseItems.length > 0
) {
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      setActiveFilter(filterButton);
    });
  });

  const handleLoadMore = () => {
    loadMoreText.textContent = "All courses loaded";
    loadMoreButton.disabled = true;
    loadMoreButton.classList.add("courses__load-more--disabled");
  };

  loadMoreButton.addEventListener("click", handleLoadMore);

  searchInput.addEventListener("input", updateVisibleCourses);

  updateVisibleCourses();
}
