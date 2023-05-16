﻿
import SvgContainer from "@core/components/SvgContainer";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as NotFoundSvg } from "assets/svg/404.svg";
import React from "react";

export function NotFound() {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<Container maxWidth={'xs'}>
				<Box sx={{ textAlign: "center", px: 3, py: 8 }}>
					<SvgContainer>
						<Box marginBottom={3}><NotFoundSvg /></Box>
					</SvgContainer>
					<Typography gutterBottom variant="h5">
						{t('Trang không tồn tại')}
					</Typography>
					{/* <Typography variant="body2">
            {t('common.NotFoundDescription')}
          </Typography> */}
					<Box sx={{ mt: 4, textAlign: "center" }}>
						<Button
							color="secondary"
							component={RouterLink}
							to={'/'}
							variant="contained"
						>
							{t("Quay lại")}
						</Button>
					</Box>
				</Box>
			</Container>
		</React.Fragment>

	);
};
