# Ticket Generator

Ticket Generator is a modern web application built with Next.js, React, Redux, and Tailwind CSS that allows users to select and book event tickets through a multi-step process. The app guides users through ticket selection, entering their attendee details, and finally previewing and downloading their ticket.

## Features

- **Multi-Step Booking Flow:**  
  - **Ticket Selection:** Choose from various ticket options.
  - **Attendee Details:** Provide personal information along with a profile image (via drag & drop or URL).
  - **Ticket Card Preview:** View a final ticket with event details, including a barcode image and download option.
- **Responsive Design:**  
  - Mobile, tablet, and desktop-friendly layouts using Tailwind’s responsive utility classes.
- **State Management:**  
  - Utilizes Redux Toolkit for managing form and ticket selection state with Redux Persist to maintain state across sessions.
- **Image Handling:**  
  - Integrated with Next-Cloudinary for optimized image delivery.
- **Custom Navigation:**  
  - A dynamic navigation bar tracks and highlights active pages.

## Technologies Used

- **Next.js:** Server-side rendering and routing.
- **React:** Building dynamic user interfaces.
- **Redux Toolkit & Redux Persist:** State management.
- **Tailwind CSS:** Styling and responsive design.
- **Next-Cloudinary:** Optimized image handling.
- **Yup:** Form validation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ticket-generator
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash

   yarn install
   ```

### Running the Application

Start the development server with:

```bash
npm run dev
```

or

```bash
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- **pages/** - Contains page-level components (e.g., TicketSelection, TicketForm, TicketCard).
- **components/** - Shared components such as Nav and custom UI elements.
- **lib/** - Redux slices and store configuration.
- **constant/** - Static data (e.g., ticket options).
- **context/** - Custom context providers for navigation and other shared state.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with any enhancements or bug fixes.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

``` bash

---

**LICENSE**

```plaintext
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org>
 Everyone is permitted to copy and distribute verbatim copies of this
 license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
which gives you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend these provisions to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  [The full text of the GNU General Public License version 3 is very long.
   For brevity, you can view the complete license text at:
   <https://www.gnu.org/licenses/gpl-3.0.txt>
   or include the full text here if desired.]

                   END OF TERMS AND CONDITIONS
```
