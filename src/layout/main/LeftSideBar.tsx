import { NavLink, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MainMenu } from '@core/constants/menuConfig';
import Logo from '@core/components/Logo';
import { useTranslation } from 'react-i18next';
import moduleService from '@core/services/moduleService';
import { BehaviorSubject } from 'rxjs';
import {  ExpandCircleDown } from '@mui/icons-material';

export const sideBarWidth = 280;
export const sideBarCollapsedWidth = 90;
export const HOVER_DURATION_DELAY = '0.5s'

const toggleMenu$ = new BehaviorSubject(false);

export const toggleMenu = () => {
  toggleMenu$.next(!toggleMenu$.value);
};

export const collapseMenu$ = new BehaviorSubject(localStorage.getItem('sidebarcollapsed') === 'true');

export const collapseMenu = () => {
  localStorage.setItem('sidebarcollapsed', JSON.stringify(!collapseMenu$.value))
  collapseMenu$.next(!collapseMenu$.value);
};

export default function LeftSideBar() {
  const { t } = useTranslation();
  const [sideBars, setSideBars] = useState([]);
  const [openMenu, setOpenMenu] = useState(true);
  const [collapsed, setCollapsed] = useState<boolean>(collapseMenu$.value);
  const [isHover, setIsHover] = useState<boolean>(false);
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down('lg'))
  
  const navigate = useNavigate();

  const emrVersion = import.meta.env.VITE_VERSION;

  const onCloseMenu = () => {
    setOpenMenu(!openMenu);
    toggleMenu();
  };

  const onCollapseMenu = () => {
    setIsHover(false)
    setCollapsed(!collapsed)
    collapseMenu();
  };

  const onHoverMenu = (hover: boolean) => {
    if (!isDownLg && collapsed) {
      setIsHover(hover);
    }
  }
  useEffect(() => {
    const subscription = toggleMenu$.subscribe((value) => {
      setOpenMenu(value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscribe = moduleService.moduleChanged$().subscribe((obj) => {
      const menu = MainMenu.filter((item) => item.moduleId === obj.moduleId)[0];
      setSideBars(menu?.children ?? undefined);
      if (obj.autoNavigate) {
        navigate(moduleService.getRoute(obj.moduleId));
      }
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  
  const CustomNavLink = ({ navigateTo, text: title, state, icon: Icon }) => {
    const resolved = useResolvedPath(navigateTo);
    const match = useMatch({ path: resolved && resolved.pathname ? resolved.pathname : '', end: true });
    return (
      <MenuItem active={match ? true : false} icon={Icon ? <Icon /> : undefined}>
        <NavLink state={state} to={navigateTo}>
          {t(`${title}`)}
        </NavLink>
      </MenuItem>
    );
  };

  const divTemp = (
    <div 
      style={{
        minWidth: collapsed ? sideBarCollapsedWidth : sideBarWidth,
        transition: 'min-width 0.3s',
        ...isDownLg && {display: 'none'}
      }}
    />
  )

  const buttonCollapsed = (
    <Box
      sx={{
        position: 'fixed',
        top: 10,
        left: (isHover || !collapsed) ? sideBarWidth : sideBarCollapsedWidth,
        marginLeft: -2,
        transform: collapsed ? 'rotate(270deg)' : 'rotate(90deg)',
        transition: 'width, left, right, 0.3s',
        zIndex: 1200,
        ...isDownLg && { display: 'none' },
        ...isHover && { transitionDelay: HOVER_DURATION_DELAY }
      }}
    >
      <IconButton disableRipple size='small' onClick={onCollapseMenu} color='inherit' sx={{ backgroundColor: 'secondary.main', padding: 0, fontSize: '28px' }}>
        <ExpandCircleDown fontSize='inherit' />
      </IconButton>
    </Box>
  )

  const renderMenu = (
    <ProSidebar
      toggled={openMenu}
      collapsed={!isDownLg && collapsed}
      onToggle={onCloseMenu}
      width={`${sideBarWidth}px`}
      breakPoint='xl'
      style={{
        position: 'fixed',
        boxShadow: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px',
        ...isHover && {
          width: sideBarWidth,
          transitionDelay: HOVER_DURATION_DELAY
        }
      }}
      collapsedWidth={`${sideBarCollapsedWidth}px`}
      onMouseEnter={()=>onHoverMenu(true)}
      onMouseLeave={()=>onHoverMenu(false)}
    >
      <SidebarHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Logo sx={{ p: 2 }} />
      </SidebarHeader>
      <SidebarContent
        style={{
          overflow: 'hidden'
        }}
      >
        <>
          <Menu
            popperArrow
            style={{
              height: '100%',
              overflow: 'auto',
            }}
            iconShape='circle'
          >
            {sideBars &&
              sideBars.map((item, index) => {
                return (
                  <div key={`menu_${index}`}>
                    {!item.children || item.children?.length === 0 ? (
                      <CustomNavLink icon={item.icon} {...item} />
                    ) : (
                      <SubMenu defaultOpen={true} title={t(`${item.text}`)} icon={item.icon ? <item.icon /> : undefined}>
                        {item.children &&
                          item.children.map((child, childIndex) => {
                            return <CustomNavLink key={`childIndex_${childIndex}`} {...child} />;
                          })}
                      </SubMenu>
                    )}
                  </div>
                );
              })}
          </Menu>
        </>
      </SidebarContent>
      <SidebarFooter>
        {<div
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            padding: '20px 24px',
            fontWeight: 600,
            height: 67
          }}
        >
          <Typography 
            noWrap 
            sx={{
              ...isHover && { transitionDelay: HOVER_DURATION_DELAY },
              ...!isDownLg && collapsed && !isHover && { opacity: 0 }
            }}
          >
            © EMR {emrVersion}
          </Typography>
        </div>}
      </SidebarFooter>
    </ProSidebar>
  );
  return (
    <>
    {divTemp}
    {renderMenu}
    {buttonCollapsed}
    </>
  )
}



