import type { StaticImageData } from 'next/image';
import type { Lang } from '../i18n/translations';
import zal1 from '../../assets/images/portfolio/zal1.jpg';
import vanna1 from '../../assets/images/portfolio/vanna1.jpg';
import salon1 from '../../assets/images/portfolio/salon1.jpg';

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
