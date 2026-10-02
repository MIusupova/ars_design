import type { StaticImageData } from 'next/image';
import type { Lang } from '../i18n/translations';
import zal1 from '../../assets/images/portfolio/zal1.jpg';
import vanna1 from '../../assets/images/portfolio/vanna1.jpg';
import salon1 from '../../assets/images/portfolio/salon1.jpg';
import zal2 from '../../assets/images/portfolio/zal2.jpg';

// Блок текста статьи: необязательный подзаголовок и абзацы.
export type PostBlock = { heading?: string; paragraphs: string[] };

export type PostText = {
  title: string;
  excerpt: string;
  blocks: PostBlock[];
};

export type Post = {
  slug: string;
  date: string; // ISO, YYYY-MM-DD
  cover: StaticImageData;
  text: Record<Lang, PostText>;
};

// Новая статья = новый объект в начале массива. Порядок на странице — по дате (новые сверху).
// Тексты ниже — черновики-заготовки: замените на свои.
export const posts: Post[] = [
  {
    slug: 'renovation-ou-rafraichissement',
    date: '2026-10-02',
    cover: zal2,
    text: {
      fr: {
        title: 'Rénovation complète ou simple rafraîchissement : comment savoir ?',
        excerpt: 'Fissures, électricité vieillissante, humidité : 5 signes qui montrent qu’un coup de peinture ne suffit plus.',
        blocks: [
          {
            paragraphs: [
              'Parfois, un appartement semble tout à fait correct, mais des problèmes apparaissent peu à peu : fissures, installations anciennes, électricité défaillante, humidité, agencement peu pratique. Dans ce cas, une simple peinture ne suffit pas.',
            ],
          },
          {
            heading: '1. Les murs et le plafond demandent sans cesse des retouches',
            paragraphs: [
              'Si fissures, décollements ou taches reviennent après la peinture, le problème ne vient pas forcément du revêtement. Avant de rénover, il faut identifier la cause et vérifier l’état des supports.',
            ],
          },
          {
            heading: '2. Une électricité ancienne',
            paragraphs: [
              'Une vieille installation ne supporte pas toujours les besoins actuels. Beaucoup d’appareils, climatisation, chauffe-eau, lave-linge et lave-vaisselle exigent un réseau électrique correctement dimensionné.',
              'Pendant les travaux, on peut prévoir à l’avance l’emplacement des prises, des interrupteurs et de l’éclairage.',
            ],
          },
          {
            heading: '3. Des problèmes de plomberie',
            paragraphs: [
              'Fuites, faible pression, canalisations anciennes ou obstructions fréquentes : autant de raisons de contrôler la plomberie.',
              'Si le chantier a déjà commencé, il est souvent plus pratique de refaire les parties défectueuses tout de suite, tant que les canalisations sont accessibles.',
            ],
          },
          {
            heading: '4. L’appartement est devenu peu pratique',
            paragraphs: [
              'Parfois, le souci ne vient pas de l’état du logement mais de son organisation : manque de rangements, prises mal placées, éclairage insuffisant, meubles qui ne rentrent pas comme prévu.',
              'Une bonne rénovation ne se contente pas de renouveler l’aspect : elle rend l’espace plus agréable à vivre au quotidien.',
            ],
          },
          {
            heading: '5. Vous prévoyez de louer ou de vendre',
            paragraphs: [
              'Avant une vente ou une location, la rénovation peut changer considérablement la première impression. Des murs propres, un éclairage moderne, une plomberie en bon état et des finitions soignées rendent le bien plus attractif pour les acheteurs ou les locataires.',
            ],
          },
          {
            heading: 'Rénovation légère ou complète ?',
            paragraphs: [
              'Il n’est pas toujours nécessaire de tout refaire. Si les réseaux sont en bon état, il suffit parfois de renouveler les murs, les sols, l’éclairage et la décoration.',
              'Mais si l’électricité, la plomberie, les murs et l’agencement posent problème en même temps, mieux vaut prévoir une rénovation complète. On évite ainsi de devoir rouvrir les murs ou le sol après les finitions.',
            ],
          },
          {
            heading: 'Que faire avant de commencer ?',
            paragraphs: [
              'Avant d’acheter les matériaux et de lancer les travaux, il faut : visiter le logement ; évaluer l’état de l’électricité et de la plomberie ; contrôler les murs, plafonds et sols ; prévoir l’éclairage et les prises ; définir les travaux nécessaires ; établir un plan et l’ordre des étapes.',
              'Mieux le projet est préparé, moins il y a de dépenses imprévues et de reprises en cours de chantier.',
            ],
          },
          {
            heading: 'Une rénovation doit résoudre des problèmes, pas seulement changer l’apparence',
            paragraphs: [
              'De beaux murs et un nouvel intérieur ne sont qu’une partie d’une bonne rénovation. L’essentiel est que, une fois les travaux terminés, le logement soit plus pratique, plus fonctionnel et plus confortable, et que les problèmes de fond aient été réglés avant les finitions.',
              'ARS DESIGN — rénovation et finitions. Nous réalisons des travaux ponctuels et des rénovations complètes d’appartements, de maisons et de locaux : finitions, électricité, plomberie, renouvellement de l’intérieur, rénovation complète.',
              'Vous voulez savoir quelle rénovation convient à votre appartement ? Contactez-nous pour une consultation.',
            ],
          },
        ],
      },
      ru: {
        title: 'Как понять, что квартире нужен ремонт, а не просто косметическое обновление?',
        excerpt: 'Трещины, старая электрика, влажность: 5 признаков, что простой покраски стен уже недостаточно.',
        blocks: [
          {
            paragraphs: [
              'Иногда квартира выглядит вполне нормально, но постепенно появляются проблемы: трещины, старые коммуникации, плохая электрика, влажность, неудобная планировка. В таких случаях простой покраски стен может быть недостаточно.',
            ],
          },
          {
            heading: '1. Стены и потолок постоянно требуют ремонта',
            paragraphs: [
              'Если после покраски снова появляются трещины, отслоения или пятна, проблема может быть не только в отделочном покрытии. Перед новым ремонтом важно определить причину и проверить состояние поверхностей.',
            ],
          },
          {
            heading: '2. Старая электрика',
            paragraphs: [
              'Старая проводка может не справляться с современной нагрузкой. Большое количество техники, кондиционеры, бойлеры, стиральные и посудомоечные машины требуют правильно рассчитанной электрической системы.',
              'Во время ремонта можно заранее продумать расположение розеток, выключателей и освещения.',
            ],
          },
          {
            heading: '3. Проблемы с сантехникой',
            paragraphs: [
              'Протечки, слабый напор воды, старые трубы или постоянные засоры — повод проверить сантехнические коммуникации.',
              'Если ремонт уже начался, часто удобнее обновить проблемные участки сразу, пока есть доступ к трубам.',
            ],
          },
          {
            heading: '4. Квартира стала неудобной',
            paragraphs: [
              'Иногда проблема не в состоянии квартиры, а в её организации. Не хватает мест для хранения, неудобно расположены розетки, недостаточно света или мебель не помещается так, как хотелось бы.',
              'Хороший ремонт позволяет не просто обновить внешний вид, а сделать пространство более удобным для повседневной жизни.',
            ],
          },
          {
            heading: '5. Вы планируете сдавать или продавать квартиру',
            paragraphs: [
              'Перед продажей или сдачей недвижимости ремонт может значительно изменить первое впечатление. Чистые стены, современное освещение, исправная сантехника и аккуратная отделка делают квартиру более привлекательной для потенциальных покупателей или арендаторов.',
            ],
          },
          {
            heading: 'Косметический или комплексный ремонт?',
            paragraphs: [
              'Не всегда необходимо полностью переделывать квартиру. Если коммуникации находятся в хорошем состоянии, иногда достаточно обновить стены, напольное покрытие, освещение и интерьер.',
              'Но если одновременно есть проблемы с электрикой, сантехникой, стенами и планировкой, лучше заранее продумать комплексный ремонт. Это помогает избежать ситуации, когда после завершения отделочных работ приходится снова вскрывать стены или пол для замены коммуникаций.',
            ],
          },
          {
            heading: 'Что важно сделать до начала ремонта?',
            paragraphs: [
              'Прежде чем покупать материалы и начинать работы, стоит: осмотреть квартиру; определить состояние электрики и сантехники; проверить стены, потолки и полы; продумать освещение и розетки; определить необходимые работы; составить план ремонта и последовательность этапов.',
              'Чем лучше подготовлен проект, тем меньше неожиданных расходов и переделок в процессе.',
            ],
          },
          {
            heading: 'Ремонт должен решать проблемы, а не просто менять внешний вид',
            paragraphs: [
              'Красивые стены и новый интерьер — это только часть хорошего ремонта. Важно, чтобы после завершения работ квартира стала удобнее, функциональнее и комфортнее, а основные проблемы были решены до финальной отделки.',
              'ARS DESIGN — ремонт и отделка. Мы выполняем отдельные работы и комплексный ремонт квартир, домов и помещений: отделочные работы, электрика, сантехника, обновление интерьера, комплексный ремонт.',
              'Хотите понять, какой ремонт нужен именно вашей квартире? Свяжитесь с нами для консультации.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'etapes-renovation-appartement',
    date: '2026-09-15',
    cover: zal1,
    text: {
      fr: {
        title: 'Les étapes clés de la rénovation d’un appartement',
        excerpt: 'De la visite technique à la remise des clés : comment se déroule un chantier bien organisé.',
        blocks: [
          {
            paragraphs: [
              'Une rénovation réussie commence bien avant le premier coup de marteau. Une visite technique, un devis détaillé et un calendrier réaliste permettent d’éviter la plupart des mauvaises surprises.',
            ],
          },
          {
            heading: 'Démolition et préparation',
            paragraphs: [
              'On dépose les anciens revêtements, on vérifie l’état des murs et des supports, puis on reprend ce qui doit l’être : rebouchage, ragréage, mise à niveau.',
            ],
          },
          {
            heading: 'Électricité et plomberie',
            paragraphs: [
              'Ces travaux se font avant les finitions, une fois les cloisons posées. C’est le bon moment pour repenser l’emplacement des prises, des points lumineux et des arrivées d’eau.',
            ],
          },
          {
            heading: 'Finitions',
            paragraphs: [
              'Enduits, peinture, sols, faïence : l’ordre compte. On travaille du haut vers le bas pour protéger chaque étape terminée.',
            ],
          },
        ],
      },
      ru: {
        title: 'Основные этапы ремонта квартиры',
        excerpt: 'От технического осмотра до передачи ключей: как проходит хорошо организованный ремонт.',
        blocks: [
          {
            paragraphs: [
              'Удачный ремонт начинается задолго до первого удара молотком. Технический осмотр, подробная смета и реалистичный график позволяют избежать большинства неприятных сюрпризов.',
            ],
          },
          {
            heading: 'Демонтаж и подготовка',
            paragraphs: [
              'Снимаем старые покрытия, проверяем состояние стен и оснований, затем исправляем всё, что нужно: заделка, выравнивание, доведение до нужного уровня.',
            ],
          },
          {
            heading: 'Электрика и сантехника',
            paragraphs: [
              'Эти работы выполняются до чистовой отделки, когда перегородки уже установлены. Самое время продумать расположение розеток, светильников и точек подвода воды.',
            ],
          },
          {
            heading: 'Чистовая отделка',
            paragraphs: [
              'Штукатурка, покраска, полы, плитка: порядок важен. Работаем сверху вниз, чтобы защитить уже завершённые этапы.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'renover-salle-de-bain',
    date: '2026-08-28',
    cover: vanna1,
    text: {
      fr: {
        title: 'Rénover sa salle de bain : les erreurs à éviter',
        excerpt: 'Étanchéité, ventilation, carrelage grand format : les points sur lesquels on ne doit pas faire de compromis.',
        blocks: [
          {
            paragraphs: [
              'La salle de bain est la pièce la plus exigeante d’un logement : humidité, variations de température, contraintes techniques. Quelques règles simples font toute la différence.',
            ],
          },
          {
            heading: 'Ne pas négliger l’étanchéité',
            paragraphs: [
              'Un système d’étanchéité sous carrelage dans la zone de douche est indispensable. C’est invisible une fois terminé, mais c’est lui qui protège les murs et les voisins du dessous.',
            ],
          },
          {
            heading: 'Prévoir la ventilation',
            paragraphs: [
              'Une bonne extraction d’air évite moisissures et joints noircis. Elle doit être pensée dès le début du projet.',
            ],
          },
        ],
      },
      ru: {
        title: 'Ремонт ванной: ошибки, которых стоит избегать',
        excerpt: 'Гидроизоляция, вентиляция, крупноформатная плитка: на чём нельзя экономить.',
        blocks: [
          {
            paragraphs: [
              'Ванная — самое требовательное помещение в доме: влажность, перепады температур, технические ограничения. Несколько простых правил решают многое.',
            ],
          },
          {
            heading: 'Не пренебрегайте гидроизоляцией',
            paragraphs: [
              'Гидроизоляция под плиткой в зоне душа обязательна. После завершения работ её не видно, но именно она защищает стены и соседей снизу.',
            ],
          },
          {
            heading: 'Продумайте вентиляцию',
            paragraphs: [
              'Хорошая вытяжка предотвращает плесень и потемневшие швы. Её нужно закладывать с самого начала проекта.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'choisir-revetement-de-sol',
    date: '2026-08-10',
    cover: salon1,
    text: {
      fr: {
        title: 'Parquet, carrelage ou stratifié : comment choisir son sol ?',
        excerpt: 'Un comparatif simple pour choisir le revêtement adapté à chaque pièce de votre logement.',
        blocks: [
          {
            paragraphs: [
              'Le sol représente une part importante du budget et de l’ambiance d’une pièce. Le bon choix dépend de l’usage, de l’humidité et de l’entretien que vous êtes prêt à y consacrer.',
            ],
          },
          {
            heading: 'Carrelage',
            paragraphs: ['Durable et facile à nettoyer, il convient aux pièces d’eau, aux cuisines et aux entrées.'],
          },
          {
            heading: 'Parquet',
            paragraphs: ['Chaleureux et noble, il demande un peu plus d’entretien mais se rénove plusieurs fois.'],
          },
          {
            heading: 'Stratifié',
            paragraphs: ['Économique et rapide à poser, c’est une bonne option pour les chambres et les pièces de vie.'],
          },
        ],
      },
      ru: {
        title: 'Паркет, плитка или ламинат: как выбрать пол?',
        excerpt: 'Простое сравнение, которое поможет подобрать покрытие для каждой комнаты.',
        blocks: [
          {
            paragraphs: [
              'Пол — существенная часть бюджета и атмосферы комнаты. Правильный выбор зависит от нагрузки, влажности и ухода, который вы готовы обеспечивать.',
            ],
          },
          {
            heading: 'Плитка',
            paragraphs: ['Долговечная и легко моется — подходит для ванных, кухонь и прихожих.'],
          },
          {
            heading: 'Паркет',
            paragraphs: ['Тёплый и благородный, требует чуть больше ухода, но его можно реставрировать много раз.'],
          },
          {
            heading: 'Ламинат',
            paragraphs: ['Недорогой и быстро укладывается — хороший вариант для спален и жилых комнат.'],
          },
        ],
      },
    },
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string, lang: Lang): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
