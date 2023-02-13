import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'



function HomeComponent () {

  return (
    <div className=' homecomponent'>

      <div class="row">
          <div class="col-12">
            <h2> Avec ADOPTE1ETUDIANT adopter un etudiant<br/> en quelques etapes tres simples</h2>
          </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-1.png" alt="A la carte" class="img-fluid"/>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 order-first order-lg-last">
            <div id="presentiel" class="anchor"></div>
            <div id="interentreprise" class="anchor"></div>
            <h4>Adopter</h4>
            <p>Trouver, <strong>les meilleurs profils</strong> de plus de 300 étudiants (tous cycles) inscrit. Votre plan de développement de compétences est sur mesure et vous permet de maîtriser votre budget.</p>
          </div>
        </div>
      </div>

  

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div id="intraentreprise" class="anchor"></div>
            <h4>Validation</h4>
            <p>Nous mettons en avant <strong> les valeurs de votre entreprise </strong> pour attirer les meilleurs profils</p>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-2.png" alt="Abonnement" class="img-fluid"/>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-3.png" alt="A la carte" class="img-fluid"/>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 order-first order-lg-last">
            <div id="presentiel" class="anchor"></div>
            <div id="interentreprise" class="anchor"></div>
            <h4>Test technique</h4>
            <p>pour s'assurer que les candidats possèdent les connaissances et les compétences nécessaires pour réussir dans le rôle pour lequel ils postulent.<strong>tres efficace</strong></p>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div id="intraentreprise" class="anchor"></div>
            <h4>Entretien</h4>
            <p> Mieux comprendre les motivations et les aspirations des candidats, ainsi que leur personnalité et leur capacité à s'intégrer à l'équipe.  permettre aux candidats de poser des questions sur l'entreprise et le poste, et de mieux comprendre les exigences et les attentes liées au poste. <strong> Obtenir une image complète du candidat</strong></p>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-4.png" alt="Abonnement" class="img-fluid"/>
          </div>
        </div>
      </div>



      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-5.png" alt="A la carte" class="img-fluid"/>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 order-first order-lg-last">
            <div id="presentiel" class="anchor"></div>
            <div id="interentreprise" class="anchor"></div>
            <h4>Contrat</h4>
            <p>définit les termes et les conditions d'un accord entre deux ou plusieurs parties. Il peut être utilisé pour formaliser une variété de types d'accords, tels que les contrats de travail, les contrats d'achat ou de vente, les contrats de location ou de prestation de services. Les contrats contiennent généralement des informations sur les obligations et les responsabilités des parties, les paiements et les modalités de résiliation.</p>
          </div>
        </div>
      </div>


      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div id="intraentreprise" class="anchor"></div>
            <h4>Suivi</h4>
            <p><strong>Accédez de manière illimitée à l’ensemble de notre catalogue</strong> de formation pour un nombre défini d’utilisateurs via un abonnement mensuel. La formule idéale pour planifier la montée en compétence de vos collaborateurs tout au long de l’année.</p>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-6.png" alt="Abonnement" class="img-fluid"/>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-7.png" alt="A la carte" class="img-fluid"/>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 order-first order-lg-last">
            <div id="presentiel" class="anchor"></div>
            <div id="interentreprise" class="anchor"></div>
            <h4>Formations à la carte</h4>
            <p>Avec cette formule ultra flexible, <strong>vous optez pour un nombre de modules au choix parmi notre catalogue</strong> de plus de 300 formations (hors cycles) pour chacun de vos utilisateurs. Votre plan de développement de compétences est sur mesure et vous permet de maîtriser votre budget.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div class="row bloc-produit">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div id="intraentreprise" class="anchor"></div>
            <h4>Formations par abonnement</h4>
            <p><strong>Accédez de manière illimitée à l’ensemble de notre catalogue</strong> de formation pour un nombre défini d’utilisateurs via un abonnement mensuel. La formule idéale pour planifier la montée en compétence de vos collaborateurs tout au long de l’année.</p>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-8.png" alt="Abonnement" class="img-fluid"/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomeComponent
