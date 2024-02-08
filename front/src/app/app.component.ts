import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public supportMessages = [
    [
      "Bonjour! Bien sûr, je serais ravi de vous aider. Pour commencer, pourriez-vous me donner quelques détails tels que la ville de départ, la date et l'heure souhaitées ?",
      'Parfait! Pourriez-vous également me donner la ville de retour ?',
      "Merci pour ces informations. Permettez-moi de rechercher les offres disponibles pour vous. Un instant, s'il vous plaît.",
      "J'ai trouvé plusieurs options pour vous. Nous avons des voitures de différentes catégories, de la citadine à la compacte. Avez-vous une préférence particulière ?",
      'Super, je pense que la Renault Clio pourrait me convenir. Comment puis-je procéder pour réserver ?',
      'Pour réserver, nous aurons besoin de quelques détails supplémentaires, tels que vos informations personnelles et de paiement. Vous préférez finaliser cela par chat ou souhaitez-vous que je vous guide à travers le processus de réservation en visioconférence ?',
      'Je pense que le chat serait plus pratique pour moi.',
      "Parfait, je vais vous guider à travers les étapes. Puis-je avoir votre nom, prénom et adresse s'il vous plaît ?",
      "Certainement, c'est Jean Dupont, 123 Rue de la République, Paris.",
      'Merci, Jean. Puis-je également obtenir votre date de naissance ?',
      "Oui, c'est le 15 mars 1985.",
      'Merci. Nous allons maintenant procéder au paiement. Veuillez fournir les détails de votre carte de crédit lorsque vous serez prêt. Nous assurons une sécurisation totale de ces informations.',
      "D'accord, je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "Pas de problème, Jean. Prenez votre temps. Si vous avez des questions supplémentaires, n'hésitez pas à me le faire savoir.",
      'Entendu, merci.',
    ],
    [
      'Bonjour! Bien sûr, je serais heureux de vous aider à modifier votre réservation. Pouvez-vous me donner plus de détails sur la modification que vous souhaitez apporter ?',
      "Merci pour ces informations. Permettez-moi de vérifier cela pour vous. Un instant, s'il vous plaît.",
      "J'ai trouvé des options disponibles pour les dates que vous avez mentionnées. Cependant, veuillez noter que cela pourrait affecter le tarif total de la location. Êtes-vous d'accord avec cela ?",
      'Certainement. Le tarif total pour la prolongation de votre réservation serait de X euros. Cela inclut les frais supplémentaires pour les jours supplémentaires.',
      "Pour finaliser la modification, j'aurai besoin de votre accord verbal, et nous procéderons ensuite à la mise à jour de votre réservation. Êtes-vous d'accord pour prolonger la location aux nouvelles dates mentionnées ?",
      "C'est un plaisir, [Nom de l'Utilisateur]. Si vous avez d'autres besoins ou des préoccupations, n'hésitez pas à nous contacter à nouveau. Bonne journée !",
    ],
    [
      "Bien sûr, je serais ravi de vous aider avec toute question que vous pourriez avoir. N'hésitez pas à demander.",
      "Merci pour votre patience. Je vais vérifier les disponibilités pour les dates que vous avez mentionnées. Un moment, s'il vous plaît.\n J'ai trouvé quelques options intéressantes pour vous. Avez-vous des préférences spécifiques pour le type de véhicule que vous recherchez ?",
      'Parfait! Pouvons-nous discuter des détails de votre réservation, y compris la durée de location et les options de paiement ?',
      'Bien entendu, je vais vous expliquer le processus de réservation. Avez-vous déjà une idée du modèle de voiture que vous souhaitez ?',
      'Super choix! Nous avons ce modèle disponible dans plusieurs couleurs. Préférez-vous une couleur en particulier ?',
      'Excellent! Nous sommes sur le point de finaliser votre réservation. Pouvez-vous confirmer les informations de paiement que vous avez fournies ?',
      "Parfait, tout est en ordre. Votre réservation est confirmée! Si vous avez d'autres questions, n'hésitez pas à me le faire savoir.",
    ],
    [
      'Je suis là pour répondre à toutes vos questions concernant notre service de location de voitures. Posez-moi simplement vos questions.',
      'Parfait! Pouvez-vous me donner plus de détails sur le type de véhicule que vous recherchez et les dates de location souhaitées ?',
      "Merci pour ces informations. Laissez-moi vérifier nos disponibilités pour ces dates. Un moment, s'il vous plaît.\n J'ai trouvé quelques options pour vous. Avez-vous des préférences spécifiques en termes de transmission ou d'options de confort ?",
      'Excellent choix! La BMW Série 5 est une voiture élégante avec des fonctionnalités avancées. Souhaitez-vous procéder à la réservation ?',
      'Pour la réservation, nous aurons besoin de vos informations de paiement. Pouvez-vous les fournir lorsque vous serez prêt ?',
      'Parfait, prenons un moment pour finaliser ces détails. Avez-vous des questions supplémentaires sur la voiture ou le processus de réservation ?',
      "Très bien, votre réservation est confirmée! Si vous avez d'autres besoins, n'hésitez pas à me contacter.",
    ],
    [
      'Bien sûr, je suis là pour vous guider tout au long du processus de réservation. Quelles sont vos dates de voyage et le type de voiture que vous recherchez ?',
      "Merci pour ces détails. Laissez-moi vérifier la disponibilité des voitures pour ces dates. Un instant, s'il vous plaît.\n J'ai trouvé quelques options pour vous. Avez-vous des préférences spécifiques en termes de taille du véhicule ou d'options de confort ?",
      'Excellent choix! La Toyota Prius est une option écologique avec une consommation de carburant réduite. Souhaitez-vous procéder à la réservation ?',
      'Pour la réservation, nous aurons besoin de vos informations de paiement. Pouvez-vous les fournir lorsque vous serez prêt ?',
      'Parfait, prenons un moment pour finaliser ces détails. Avez-vous des questions supplémentaires sur la voiture ou le processus de réservation ?',
      "Très bien, votre réservation est confirmée! Si vous avez d'autres besoins, n'hésitez pas à me contacter.",
    ],
  ];
  
  public userMessages =  [
    [
      "Bonjour, je suis intéressé par la location d'une voiture. Pouvez-vous m'aider ?",
      'Je prévois de partir de Paris le week-end prochain, vendredi matin, et je dois retourner le véhicule le lundi soir. Une petite voiture serait parfaite.',
      'Bien sûr, je retournerai la voiture à Paris également.',
      "D'accord, merci beaucoup.",
      'Une citadine serait idéale. Quelles sont les options disponibles dans cette catégorie ?',
      "Je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "D'accord, je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      'Je pense que la Renault Clio pourrait me convenir. Comment puis-je procéder pour réserver ?',
      'Une citadine serait idéale. Quelles sont les options disponibles dans cette catégorie ?',
      "Je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "D'accord, je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "Je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "D'accord, je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "Je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "Je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
      "D'accord, je vais préparer ma carte. Merci pour votre aide jusqu'à présent.",
    ],
    [
      "Bonjour, j'ai réservé une voiture pour le week-end prochain, mais j'aurais besoin de la modifier. Est-ce possible ?",
      "J'avais initialement réservé une voiture pour trois jours, mais j'aimerais maintenant l'étendre à cinq jours. Est-ce réalisable ?",
      'Je souhaite maintenant récupérer la voiture le jeudi matin et la retourner le mardi soir.',
      'Oui, je comprends. Pouvez-vous me donner une estimation du nouveau tarif ?',
      "Oui, je suis d'accord. Merci beaucoup pour votre assistance.",
      "Merci beaucoup pour votre aide rapide et efficace. Je l'apprécie vraiment.",
    ],
    [
      "Bonjour! J'aimerais obtenir des informations sur la location d'une voiture pour un voyage prochain. Pouvez-vous m'aider ?",
      'Je prévois un voyage de deux semaines à travers le pays. Pouvez-vous me recommander un modèle spacieux et économe en carburant ?',
      'Je prévois de partir de Paris et de revenir au même endroit. Quelles sont les options disponibles pour cette période ?',
      "Pas de préférences particulières pour la couleur. Tout ce qui est disponible fera l'affaire.",
      "D'accord, je vais préparer ma carte de crédit. Pouvez-vous me guider sur le processus de réservation ?",
      "Je pense que la Renault Grand Scénic serait un bon choix. Qu'en pensez-vous ?",
      'Oui, le noir serait parfait. Pouvez-vous me donner le total de la réservation et les détails de paiement ?',
      'Les informations de paiement sont les suivantes : XXXX-XXXX-XXXX-1234. Est-ce correct ?',
      'Oui, tout est correct. Merci beaucoup pour votre assistance. Je suis excité pour le voyage!',
    ],
    [
      "Bonjour! J'aimerais en savoir plus sur la location d'une voiture de luxe pour un événement spécial. Pouvez-vous m'aider ?",
      'Je cherche quelque chose de luxueux et confortable, idéalement une berline. Les dates de location seraient du 10 au 15 mars.',
      'Je préfère une transmission automatique et des fonctionnalités avancées telles que la navigation GPS et les sièges chauffants.',
      'La BMW Série 5 semble être un bon choix. Quelles sont les options de couleur disponibles pour ce modèle ?',
      'Oui, je suis prêt à procéder à la réservation. Comment puis-je fournir les informations de paiement ?',
      "Puis-je payer avec ma carte de crédit Visa, numéro XXXX-XXXX-XXXX-5678, date d'expiration 03/25 ?",
      "Toutes les informations sont correctes. Merci beaucoup pour votre assistance. J'ai hâte de conduire cette voiture de luxe!",
    ],
    [
      "Bonjour! J'aimerais louer une voiture pour un voyage d'affaires. Pouvez-vous m'aider ?",
      "Je recherche une voiture économique en carburant, de taille moyenne, pour une période d'une semaine à partir du 20 février.",
      "La Toyota Prius semble être un bon choix en termes d'économie de carburant. Quelles sont les options de couleur pour ce modèle ?",
      'Oui, je suis prêt à procéder à la réservation. Comment puis-je fournir les informations de paiement ?',
      "Puis-je payer avec ma carte de crédit MasterCard, numéro XXXX-XXXX-XXXX-9876, date d'expiration 05/24 ?",
      "Toutes les informations sont correctes. Merci beaucoup pour votre assistance. J'apprécie votre aide pour rendre mon voyage plus facile.",
    ],
  ];

  public username: string = '';
  public destinationUsername: string = '';
  public currentChat?: number
  public currentMessage?: number ;
  public form = this.fb.group({
    username: ['', [Validators.required]],
  });
  public chatForm = this.fb.group({
    text: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {}

  public submit(): void {
    const { username } = this.form.value;

    if (!username) return;

    if (username.toLowerCase() != 'support') {
      this.destinationUsername = 'Service Client';
      this.currentChat = Math.floor(Math.random() * this.supportMessages.length)
      console.log(this.currentChat)
      this.currentMessage = Math.floor(Math.random() * this.supportMessages.length/1.5)
      console.log(this.currentMessage)
    }
      

    this.username = username;
  }

  public incrementMessage() {
    (this.currentMessage as number) += 1

    this.chatForm.reset()
  }
}
