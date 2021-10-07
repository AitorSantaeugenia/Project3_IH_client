import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Dashboard',
		path: '/dashboard',
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: 'Usuarios',
				path: '/dashboard/usuarios',
				icon: <IoIcons.IoMdPeople />
			}
			// },
			// {
			// 	title: 'Estadísticas',
			// 	path: '/dashboard/estadisticas',
			// 	icon: <AiIcons.AiOutlineSchedule />
			// }
		]
	},
	{
		title: 'Paginas',
		path: '/paginas',
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: 'Hotel',
				path: '/paginas/hotel',
				icon: <IoIcons.IoIosPaper />,
				cName: 'sub-nav'
			},
			{
				title: 'Habitaciones',
				path: '/paginas/habitaciones',
				icon: <IoIcons.IoIosPaper />,
				cName: 'sub-nav'
			},
			{
				title: 'Restaurante',
				path: '/paginas/restaurante',
				icon: <IoIcons.IoIosPaper />
			},
			{
				title: 'Tienda',
				path: '/paginas/tienda',
				icon: <IoIcons.IoIosPaper />
			}
			// },
			// {
			// 	title: 'Contacto',
			// 	path: '/paginas/contacto',
			// 	icon: <IoIcons.IoIosPaper />
			// }
		]
	},
	// {
	// 	title: 'Gestor de reservas',
	// 	path: '/gestor',
	// 	icon: <FaIcons.FaCartPlus />
	// },
	{
		title: 'Perfil',
		path: '/perfil',
		icon: <AiIcons.AiOutlineUser />
	},
	// {
	// 	title: 'Mensajes',
	// 	path: '/mensajes',
	// 	icon: <FaIcons.FaEnvelopeOpenText />
	// },
	{
		title: 'Soporte',
		path: '/soporte',
		icon: <IoIcons.IoMdHelpCircle />
	}
];
