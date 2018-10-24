function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">App Settings</Text>}>
        <Text bold>Podcast URLs</Text>
        <AdditiveList
          settingsKey="podList"
          title="Podcast URLs"
        />
        <Link source="https://www.help.com">Help</Link>
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
