import { ThemeToggle, WithThemeSelection } from './ThemeContext';
import { Content } from './Content';

export const ChartContent = ({ title, description, children, className }) => {
  return <Content title={title} description={description}>
    <div className='w-full p-4 bg-white bg-opacity-25 rounded justify-self-center'>
      <ThemeToggle defaultTheme={'light'} themes={[{ key: 'light', text: 'Light', className: 'bg-white text-black' }, { key: 'dark', text: 'Dark', className: 'bg-black text-white outline-yellow-500' }]}>

        <WithThemeSelection theme={'light'}>
          <div className={`mt-2 p-4 bg-white ${className || ''}`}>
            {children}
          </div>
        </WithThemeSelection>

        <WithThemeSelection theme={'dark'}>
          <div className={`mt-2 p-4 bg-black dark-chart ${className || ''}`}>
            {children}
          </div>
        </WithThemeSelection>



      </ThemeToggle>
    </div>
  </Content>;
};
