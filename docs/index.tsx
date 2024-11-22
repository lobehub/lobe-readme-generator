import { ReadmeHero } from '@lobehub/readme-wizard';
import { Button } from 'antd';
import { Link } from 'dumi';
import { Center } from 'react-layout-kit';

export default () => {
  return (
    <Center gap={16} style={{ maxWidth: 960 }} width={'100%'}>
      <ReadmeHero />
      <Link to={'/components/readme-hero'}>
        <Button size={'large'}>Find more MAGIC 🔮</Button>
      </Link>
    </Center>
  );
};
