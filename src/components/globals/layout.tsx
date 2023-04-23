import React from 'react'
import { Image, Layout, Menu } from 'antd'

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<Layout>
			<Layout.Header className='sticky top-0 z-10 w-full bg-white flex items-center justify-center gap-4'>
				<Image
					src='/banner.png'
					className='p-0 m-0 float-left rounded'
					height={52}
					preview={false}
				/>
				<Menu
					theme='light'
					mode='horizontal'
					className='flex-grow'
					defaultSelectedKeys={['1']}
					items={[{ key: '1', label: 'Home' }]}
				/>
			</Layout.Header>
			<Layout.Content className='p-6 pb-0'>
				<div
					className='p-[24px] bg-white overflow-y-auto'
					style={{ minHeight: 'calc(100vh - 152px)' }}
				>
					{children}
				</div>
			</Layout.Content>
			<Layout.Footer className='text-center'>
				{new Date().getFullYear()} &copy; React Starter Template
			</Layout.Footer>
		</Layout>
	)
}

export default AppLayout
