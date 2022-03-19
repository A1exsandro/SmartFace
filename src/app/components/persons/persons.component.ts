import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css', './persons.component2.css']
})
export class PersonsComponent implements OnInit {

  componentSelected: number = 0

  gallerySelected: number = 0
  stackCheckedImagesGalleries: number[] = [0, 0]
  imagesNumberGalleries: number[] = [8, 12]

  galleryVisitorSelected: number = 0
  stackCheckedVisitorImagesGalleries: number[] = [0, 0]
  imagesNumberVisitorGalleries: number[] = [8, 12]

  constructor() { }

  ngOnInit(): void {
    this.displayComponents();
    this.displayTabGallery();
    this.displayVisitorTabGallery();
    this.runSearch();
    this.runTables();
    this.runGalleryImages();
    this.runVisitorGalleryImages();
  }

  displayComponents(): void {
    let components = document.querySelectorAll('.section-person')
    let items = document.querySelectorAll('nav ul li')
    let self: PersonsComponent = this

    // Seções da aba condôminos
    let sectionsResidents = [
      document.querySelector('.add-residents-container'),
      document.querySelector('.search-residents-container'),
      document.querySelector('.data-residents-container')
    ]

    // Seções da aba visitantes
    let sectionsVisitors = [
      document.querySelector('.add-visitors-container'),
      document.querySelector('.search-visitors-container'),
      document.querySelector('.data-visitors-container')
    ]

    let allSections = [sectionsResidents, sectionsVisitors]

    for (let i = 0; i < components!.length; i++) {
      items[i].addEventListener('click', function (event) {
        if (i !== self.componentSelected) {
          (components![self.componentSelected] as HTMLElement).style.display = 'none';
          (items![self.componentSelected] as HTMLElement).classList.remove('selected');

          // Fecha todas as seções do painel desabilitado
          allSections[self.componentSelected].forEach(function (sec) {
            (sec as HTMLElement).style.display = 'none';
          })

          // Muda o status para a aba atual
          self.componentSelected = i;

          (components![i] as HTMLElement).style.display = 'block';
          (items![i] as HTMLElement).classList.add('selected')
        }
      })
    }
  }

  displayTabGallery(): void {
    let galleryComponents = document.querySelectorAll('.data-residents-container .gallery-box');
    let items = document.querySelectorAll('.data-residents-container .tab');
    let imagesNumber = document.querySelector('.data-residents-container small span');
    let buttonsGallery = document.querySelectorAll('.data-residents-button-gallery');
    let buttonUseProfile = document.querySelector('.data-residents-button-use-profile');
    let buttonLoadMore = document.querySelector('.data-residents-button-load-more');
    let self: PersonsComponent = this;

    for (let i = 0; i < galleryComponents!.length; i++) {
      items[i].addEventListener('click', function (event) {
        if (i !== self.gallerySelected) {
          (galleryComponents![self.gallerySelected] as HTMLElement).style.display = 'none';
          (items![self.gallerySelected] as HTMLElement).classList.remove('tab-selected');
          self.gallerySelected = i;

          // Habilita ou desabilita os botões: Recognition, Liveness e Remover
          if (self.stackCheckedImagesGalleries[self.gallerySelected] > 0) {
            buttonsGallery.forEach(function (button) {
              button.classList.remove('data-residents-button-disabled')
            })
          }
          else {
            buttonsGallery.forEach(function (button) {
              button.classList.add('data-residents-button-disabled')
            })
          }

          // Habilita ou desabilita os botões: Usar no Perfil, Carregar Mais e Pesquisar Imagem
          if (i == 0) {
            (buttonLoadMore as HTMLElement).style.display = 'none';
            (buttonUseProfile as HTMLElement).style.display = 'inline';
          }
          else {
            (buttonUseProfile as HTMLElement).style.display = 'none';
            (buttonLoadMore as HTMLElement).style.display = 'inline-block';
          }

          (imagesNumber as HTMLElement).textContent = self.imagesNumberGalleries[i].toString();
          (galleryComponents![i] as HTMLElement).style.display = 'grid';
          (items![i] as HTMLElement).classList.add('tab-selected')
        }
      })
    }
  }

  displayVisitorTabGallery(): void {
    let galleryComponents = document.querySelectorAll('.data-visitors-container .gallery-box');
    let items = document.querySelectorAll('.data-visitors-container .tab');
    let imagesNumber = document.querySelector('.data-visitors-container small span');
    let buttonsGallery = document.querySelectorAll('.data-visitors-button-gallery');
    let buttonUseProfile = document.querySelector('.data-visitors-button-use-profile');
    let buttonLoadMore = document.querySelector('.data-visitors-button-load-more');
    let self: PersonsComponent = this;

    for (let i = 0; i < galleryComponents!.length; i++) {
      items[i].addEventListener('click', function (event) {
        if (i !== self.galleryVisitorSelected) {
          (galleryComponents![self.galleryVisitorSelected] as HTMLElement).style.display = 'none';
          (items![self.galleryVisitorSelected] as HTMLElement).classList.remove('tab-selected');
          self.galleryVisitorSelected = i;

          // Habilita ou desabilita os botões: Recognition, Liveness e Remover
          if (self.stackCheckedVisitorImagesGalleries[self.galleryVisitorSelected] > 0) {
            buttonsGallery.forEach(function (button) {
              button.classList.remove('data-visitors-button-disabled')
            })
          }
          else {
            buttonsGallery.forEach(function (button) {
              button.classList.add('data-visitors-button-disabled')
            })
          }

          // Habilita ou desabilita os botões: Usar no Perfil, Carregar Mais e Pesquisar Imagem
          if (i == 0) {
            (buttonLoadMore as HTMLElement).style.display = 'none';
            (buttonUseProfile as HTMLElement).style.display = 'inline';
          }
          else {
            (buttonUseProfile as HTMLElement).style.display = 'none';
            (buttonLoadMore as HTMLElement).style.display = 'inline-block';
          }

          (imagesNumber as HTMLElement).textContent = self.imagesNumberVisitorGalleries[i].toString();
          (galleryComponents![i] as HTMLElement).style.display = 'grid';
          (items![i] as HTMLElement).classList.add('tab-selected')
        }
      })
    }
  }

  displayAddResidents(): void {
    let addRedidents = document.querySelector('.add-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (addRedidents as HTMLElement).style.display = 'block';
  }

  closeAddResidents(): void {
    let addRedidents = document.querySelector('.add-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (addRedidents as HTMLElement).style.display = 'none';
  }

  displayAddVisitors(): void {
    let addRedidents = document.querySelector('.add-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (addRedidents as HTMLElement).style.display = 'block';
  }

  closeAddVisitors(): void {
    let addRedidents = document.querySelector('.add-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (addRedidents as HTMLElement).style.display = 'none';
  }

  displaySearchResidents(): void {
    let searchRedidents = document.querySelector('.search-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (searchRedidents as HTMLElement).style.display = 'block';
  }

  closeSearchResidents(): void {
    let searchRedidents = document.querySelector('.search-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (searchRedidents as HTMLElement).style.display = 'none';
  }

  displaySearchVisitors(): void {
    let searchRedidents = document.querySelector('.search-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (searchRedidents as HTMLElement).style.display = 'block';
  }

  closeSearchVisitors(): void {
    let searchRedidents = document.querySelector('.search-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (searchRedidents as HTMLElement).style.display = 'none';
  }

  runSearch(): void {
    let search = document.querySelector('#search');
    let searchVisitors = document.querySelector('#search-visitors');
    let self: PersonsComponent = this
    search.addEventListener('keypress', function (event: any) {
      if (event.key == 'Enter') {
        self.displaySearchResidents();
      }
    });
    searchVisitors.addEventListener('keypress', function (event: any) {
      if (event.key == 'Enter') {
        self.displaySearchVisitors();
      }
    });
  }

  runTables(): void {
    let tables = document.querySelectorAll('table');
    let self: PersonsComponent = this
    tables.forEach(function (table: HTMLTableElement) {
      for (let i = 0; i < table.rows.length; i++) {
        if (i > 0) {
          table.rows[i].addEventListener('click', function (event) {
            if (self.componentSelected == 0) {
              self.displayDataResident();
            }
            else {
              self.displayDataVisitor();
            }
          })
        }
      }
    });
  }

  runGalleryImages(): void {
    let imagesGalleryRegister = document.querySelectorAll('.data-residents-container .gallery-box-register .gallery-image input');
    let imagesGalleryRecognition = document.querySelectorAll('.data-residents-container .gallery-box-recognition .gallery-image input');
    let buttonsGallery = document.querySelectorAll('.data-residents-button-gallery');
    let buttonsUseProfile = document.querySelector('.data-residents-button-use-profile');
    let imagesItem: any[] = [imagesGalleryRegister, imagesGalleryRecognition];
    let self: PersonsComponent = this;
    
    for (let i = 0; i < imagesItem.length; i++) {
      imagesItem[i].forEach(function (item) {
        item.addEventListener('click', function (event: any) {
          if ((event.target as HTMLInputElement).checked) {
            self.stackCheckedImagesGalleries[i]++;
            // console.log('stack images ' + i + ': ' + self.stackCheckedImagesGalleries[i]); // LOG
          }
          else {
            self.stackCheckedImagesGalleries[i]--;
            // console.log('stack images ' + i + ': ' + self.stackCheckedImagesGalleries[i]); // LGO
          }

          // Habilita ou desabilita os botões: Recognition, Liveness e Remover
          if (self.stackCheckedImagesGalleries[self.gallerySelected] > 0) {
            buttonsGallery.forEach(function (button) {
              button.classList.remove('data-residents-button-disabled')
            })
          }
          else {
            buttonsGallery.forEach(function (button) {
              button.classList.add('data-residents-button-disabled')
            })
          }

          // Habilita ou desabilita o botão: Usar no Perfil
          if (self.gallerySelected == 0 && self.stackCheckedImagesGalleries[self.gallerySelected] == 1) {
            buttonsUseProfile.classList.remove('data-residents-button-disabled')
          }
          else {
            buttonsUseProfile.classList.add('data-residents-button-disabled')
          }
        })
      })
    }
  }

  runVisitorGalleryImages(): void {
    let imagesGalleryRegister = document.querySelectorAll('.data-visitors-container .gallery-box-register .gallery-image input');
    let imagesGalleryRecognition = document.querySelectorAll('.data-visitors-container .gallery-box-recognition .gallery-image input');
    let buttonsGallery = document.querySelectorAll('.data-visitors-button-gallery');
    let buttonsUseProfile = document.querySelector('.data-visitors-button-use-profile');
    let imagesItem: any[] = [imagesGalleryRegister, imagesGalleryRecognition];
    let self: PersonsComponent = this;
    
    for (let i = 0; i < imagesItem.length; i++) {
      imagesItem[i].forEach(function (item) {
        item.addEventListener('click', function (event: any) {
          if ((event.target as HTMLInputElement).checked) {
            self.stackCheckedVisitorImagesGalleries[i]++;
            // console.log('stack images ' + i + ': ' + self.stackCheckedVisitorImagesGalleries[i]); // LOG
          }
          else {
            self.stackCheckedVisitorImagesGalleries[i]--;
            // console.log('stack images ' + i + ': ' + self.stackCheckedVisitorImagesGalleries[i]); // LGO
          }

          // Habilita ou desabilita os botões: Recognition, Liveness e Remover
          if (self.stackCheckedVisitorImagesGalleries[self.galleryVisitorSelected] > 0) {
            buttonsGallery.forEach(function (button) {
              button.classList.remove('data-visitors-button-disabled')
            })
          }
          else {
            buttonsGallery.forEach(function (button) {
              button.classList.add('data-visitors-button-disabled')
            })
          }

          // Habilita ou desabilita o botão: Usar no Perfil
          if (self.galleryVisitorSelected == 0 && self.stackCheckedVisitorImagesGalleries[self.galleryVisitorSelected] == 1) {
            buttonsUseProfile.classList.remove('data-visitors-button-disabled')
          }
          else {
            buttonsUseProfile.classList.add('data-visitors-button-disabled')
          }
        })
      })
    }
  }

  displayDataResident(): void {
    let dataRedident = document.querySelector('.data-residents-container');
    let searchPanel = document.querySelector('.search-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (dataRedident as HTMLElement).style.display = 'block';
    (searchPanel as HTMLElement).style.display = 'none';
  }

  closeDataResident(): void {
    let dataRedident = document.querySelector('.data-residents-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (dataRedident as HTMLElement).style.display = 'none';
  }

  displayDataVisitor(): void {
    let dataVisitor = document.querySelector('.data-visitors-container');
    let searchPanel = document.querySelector('.search-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'none';
    (dataVisitor as HTMLElement).style.display = 'block';
    (searchPanel as HTMLElement).style.display = 'none';
  }

  closeDataVisitor(): void {
    let dataVisitor = document.querySelector('.data-visitors-container');
    let components = document.querySelectorAll('.section-person');
    let self: PersonsComponent = this;

    (components![self.componentSelected] as HTMLElement).style.display = 'block';
    (dataVisitor as HTMLElement).style.display = 'none';
  }
}
