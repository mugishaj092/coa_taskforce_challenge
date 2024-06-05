const imageWrappers = document.querySelectorAll('.image-wrapper');

const handleImageHover = () => {
  imageWrappers.forEach((wrapper) => {
    const overlay = wrapper.querySelector('.overlay');
    const animalDetails = wrapper.querySelector('.animal-details');
    const expandBtn = wrapper.querySelector('.expand-btn');
    const image = wrapper.querySelector('img');

    wrapper.addEventListener('mouseenter', () => {
      overlay.style.backdropFilter = 'blur(5px)';
      animalDetails.style.transform = 'translateY(10%)';
      image.style.transform = 'scale(1.1)';
      image.style.filter = 'grayscale(100%) brightness(25%)';
      expandBtn.style.opacity = '1';
    });

    wrapper.addEventListener('mouseleave', () => {
      overlay.style.backdropFilter = 'none';
      animalDetails.style.transform = 'translateY(40%)';
      image.style.transform = 'scale(1)';
      image.style.filter = 'none';
      expandBtn.style.opacity = '0';
    });
  });
};

const handleFullSizeView = () => {
  const expandBtns = document.querySelectorAll('.expand-btn');
  const fullSizePhoto = document.querySelector('.full-size-photo');
  const fullSizePhotoImg = fullSizePhoto.querySelector('img');
  const closeBtn = document.querySelector('.close-btn');
  const modal = document.querySelector('.modal');

  expandBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const imgSrc = document.querySelector(
        `.gallery-container .image-wrapper:nth-child(${index + 1}) img`
      ).src;
      fullSizePhotoImg.src = imgSrc;
      modal.style.display = 'block';
      fullSizePhoto.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    fullSizePhoto.style.display = 'none';
  });
};

handleFullSizeView();
handleImageHover();
